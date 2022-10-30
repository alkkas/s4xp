using System;
using System.Timers;
using System.Threading;
using System.Threading.Tasks;
using Telegram.Bot;
using Telegram.Bot.Types;
using Telegram.Bot.Exceptions;
using Telegram.Bot.Types.ReplyMarkups;
using Microsoft.EntityFrameworkCore;
//https://api.telegram.org/bot5468597499:AAGdw8X_2mC533zR4c3uicU7FaV7bXtw_yQ/sendMessage?chat_id=559005515&text=hello%20friend

/* 1)делаем логику оповещения пользователей на main server
 * 2)Обрабатываем обновления курса
 * 3)получаем студентов, которые подписаны на курс
 * 4) пробегаемся по коллекции и делаем запросы на оповечения
 */
namespace Hakaton_bot
{
    enum States
    {
        Start,
        Help,
        CheckRegistration,
        UserRegistarated,
        CheckCource,
        WaitCourceId,
        CourceRegistrated
    }

    public class Programm
    { private const string CourceRegistrationLink = "vk.com/im";
        private const string RegestrationLink = "vk.com/im";
        private const string Text1 = "Я ещё не зарегестрирован";
        private const string Text2 = "Я уже зарегистрирован";
        private const string Text3 = "Добавить преподавателя";
        private const string Text4 = "В таком случае тебе нужно перейти по этой ссылке "+RegestrationLink +  " и зарегистрироваться";
        private const string Text5 = "Готово!";
        private const string Text6 = "Отлично, тогда отправь мне свой id пользователя в формате: \"id1234\" ";
        private const string Text7 = "Отлично, тогда пришли мне id курса";
        private const string Text8 = "У тебя уже есть курс, на который ты подписан?";
        private const string Hellow_Text = "Привет, я - S4xp бот. Я помогу тебе не забывать о тестах, которые составил твой преподаватель и буду напоминать о встречах с ним :)    Ты уже зарегестрирован?";
        private const string Text9 = "Поздравляю, теперь ты будешь получать уведомления об обновлениях данного курса.";
        private const string Text10 = "В таком случае перейди по этой ссылке " + CourceRegistrationLink + " выбери курс и пришли мне его id.";
        private const string Text11 = "Выбрал курс";
        internal string[] comands =  new string[] {"comands"};
        static Dictionary<long, States> states = new Dictionary<long, States>();

        static void Main(string[] args)
        {
            
            new Thread(Func).Start();

            TelegramBotClient Client = new TelegramBotClient("5468597499:AAGdw8X_2mC533zR4c3uicU7FaV7bXtw_yQ");
            Client.StartReceiving(Update, Error);
            Console.ReadLine();
        }
        async static Task Update(ITelegramBotClient Botclient, Update update, CancellationToken token)
        {
            try
            {
 var message = update.Message;
            Student student = new Student(selfId: "тут работа с api", courceId: "тут работа с api", tgId: (message.Chat.Id));

            if (message.Text != null)
            {
                switch (message.Text)
                {
                    case "/start":
                            Console.WriteLine(message.Chat.Id);
                        if (!states.ContainsKey(message.Chat.Id))
                        {
                            states.Add(message.Chat.Id, States.Start);
                        } else
                        {
                            states[message.Chat.Id] = States.Start;

                        }
                        await Botclient.SendTextMessageAsync(message.Chat.Id, Hellow_Text, replyMarkup: GetButtons());
                        return;
                    case "/help":
                        await Botclient.SendTextMessageAsync(message.Chat.Id, "Comands");
                        return;
                    case Text1:
                        await Botclient.SendTextMessageAsync(message.Chat.Id, Text4, replyMarkup: CheckRegistration());
                        states[message.Chat.Id] = States.CheckRegistration;
                        return;
                    case Text2: 
                        var curentState = states[message.Chat.Id];
                        {
                            await Botclient.SendTextMessageAsync(message.Chat.Id, Text6);
                            states[message.Chat.Id] = States.UserRegistarated;
                        }
                        return;
                    case Text3:
                        return;
                    case Text5:

                        { 
                            await Botclient.SendTextMessageAsync(message.Chat.Id, Text6);
                            using (var db = new ApplicationDbContext())
                            {
                                student.TgId = message.Chat.Id;
                                student.SelfId = message.Text;
                                student.CourceId = null;
                                db.Students.AddAsync(student);
                                db.SaveChanges();
                            }
                            states[message.Chat.Id] = States.UserRegistarated;
                        }       
                        return;
                    case "Да":
                        await Botclient.SendTextMessageAsync(message.Chat.Id, Text7);
                        using (var db = new ApplicationDbContext())
                        {
                            student = db.Students.FirstOrDefault(student => student.TgId == message.Chat.Id);
                            student.CourceId = message.Text;
                            db.Students.Update(student);
                            db.SaveChanges();
                        }
                        states[message.Chat.Id] = States.WaitCourceId;

                        return;
                        case "Нет":
                            states[message.Chat.Id] = States.WaitCourceId;
                            await Botclient.SendTextMessageAsync(message.Chat.Id, Text10, replyMarkup: RemoveButtons());
                            states[message.Chat.Id] = States.WaitCourceId;

                            return;
                    default:
                        if (message.Text.ToLower().Contains("id"))
                        {
                            if (!states.ContainsKey(message.Chat.Id))
                            {
                                states.Add(message.Chat.Id, States.Start);
                            }
                            
                            var curentState1 = states[message.Chat.Id];
                            if(curentState1 == States.UserRegistarated)
                            {
                                await Botclient.SendTextMessageAsync(message.Chat.Id,Text8 , replyMarkup: ChechCource());
                                states[message.Chat.Id] = States.CheckCource;
                            } 
                            if (curentState1 == States.CheckCource)
                            {
                                await Botclient.SendTextMessageAsync(message.Chat.Id,Text9);
                                states[message.Chat.Id] = States.CourceRegistrated;
                            }
                            if (curentState1 == States.WaitCourceId)
                            {
                                    await Botclient.SendTextMessageAsync(message.Chat.Id, Text9);
                                    using (var db = new ApplicationDbContext())
                                    {
                                        student = db.Students.FirstOrDefault(student => student.TgId == message.Chat.Id);
                                        student.CourceId = message.Text;
                                        db.Students.Update(student);
                                        db.SaveChanges();
                                    }
                                }
                            return;
                        }
                        await Botclient.SendTextMessageAsync(message.Chat.Id, "Ошибка выполнения кода", replyMarkup: RemoveButtons());
                        return;               
                }
            }
            }
            catch (Exception e)
            {
                Console.WriteLine("Error"+e);
            }
        }
        private static ReplyKeyboardMarkup ChechCource()
        {
            var keyboard = new ReplyKeyboardMarkup
            (
                new List<List<KeyboardButton>>
                {
                    new List<KeyboardButton>
                    {
                        new KeyboardButton ("Да"),
                        new KeyboardButton("Нет"),
                    }
                }
            );
            keyboard.ResizeKeyboard = true;
            return keyboard;
        }
        private static Task Error(ITelegramBotClient client, Exception exception, CancellationToken token)
        {
            Console.WriteLine(exception.Message);
            return Task.CompletedTask;
        }
        static IReplyMarkup GetButtons()
        {
            var keyboard = new ReplyKeyboardMarkup
            (
                new List<List<KeyboardButton>>
                {
                    new List<KeyboardButton>
                    {
                        new KeyboardButton (Text1),
                        new KeyboardButton(Text2),
                    }
                }
            );
            keyboard.ResizeKeyboard = true;
            return keyboard;

        }
        static IReplyMarkup CheckRegistration()
        {
            var Registr_keyboard = new ReplyKeyboardMarkup
                (
                    new List<KeyboardButton> { new KeyboardButton(Text5) }
                );
            Registr_keyboard.ResizeKeyboard=true;
            return Registr_keyboard;
            
        }
        static ReplyKeyboardRemove RemoveButtons()
        {
            return new ReplyKeyboardRemove();
        }

        private static void Func()
        {
            
            while (true)
            {
                var href = "https://api.telegram.org/bot5468597499:AAGdw8X_2mC533zR4c3uicU7FaV7bXtw_yQ/sendMessage?chat_id=message.Chat.Id&text=Отслеживаемый%20курс%20обновлён";
                var request = new GetRequest(href);
                request.Run();
                
            }
        }
    }
}
