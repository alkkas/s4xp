using System;
using System.Threading;
using System.Threading.Tasks;
using Telegram.Bot;
using Telegram.Bot.Types;
using Telegram.Bot.Exceptions;
using Telegram.Bot.Types.ReplyMarkups;

namespace Hakaton_bot
{
    public class Programm
    {
        private const string RegestrationLink = "vk.com/im";
        private const string Text1 = "Я ещё не зарегестрирован";
        private const string Text2 = "Я уже зарегистрирован";
        private const string Text3 = "Добавить преподавателя";
        private const string Text4 = "В таком случае тебе нужно перейти по этой ссылке "+RegestrationLink +  " и зарегестрироваться";
        private const string Text5 = "Готово!";
        private const string Text6 = "Отлично, тогда отправь мне свой id пользователя в формате: \"id1234\" ";
        private const string Hellow_Text = "Привет, я - S4xp бот. Я помогу тебе не забывать о тестах, которые составил твой преподаватель и буду напоминать о встречах с ним :)    Ты уже зарегестрирован?";
        internal string[] comands =  new string[] {"comands"};
        static void Main(string[] args)
        {
            TelegramBotClient Client = new TelegramBotClient("5468597499:AAGdw8X_2mC533zR4c3uicU7FaV7bXtw_yQ");
            Client.StartReceiving(Update, Error);
            Console.ReadLine();
        }
        async static Task Update(ITelegramBotClient Botclient, Update update, CancellationToken token)
        {
            var message = update.Message;


            if (message.Text != null)
            {
                if (message.Text == "/start")
                {
                    await Botclient.SendTextMessageAsync(message.Chat.Id, Hellow_Text, replyMarkup: GetButtons());
                    return;
                }

                if (message.Text == "/help")
                {
                    await Botclient.SendTextMessageAsync(message.Chat.Id, "Comands");
                    return;
                }
                if (message.Text == Text1 ) 
                {
                    await Botclient.SendTextMessageAsync(message.Chat.Id, Text4, replyMarkup: CheckRegistration());
                    return;
                }
                if (message.Text == Text2)
                {
                    //RemoveButtons();
                    await Botclient.SendTextMessageAsync(message.Chat.Id, Text6);
                    return;
                }
                if (message.Text == Text3)
                {
                    
                    return;
                }
                if (message.Text == Text5)
                {
                    
                    await Botclient.SendTextMessageAsync(message.Chat.Id, Text6);
                    return;
                }
                {
                    //RemoveButtons();
                    await Botclient.SendTextMessageAsync(message.Chat.Id, "Ok", replyMarkup: RemoveButtons());
                    return;
                }
                
            }
        }
        private static Task Error(ITelegramBotClient client, Exception exception, CancellationToken token)
        {
            Console.WriteLine(exception.Message);
            return null;
        }
        private static ReplyKeyboardMarkup NewTeacher()
        {
            var keyboard = new ReplyKeyboardMarkup
            (new List<KeyboardButton> { new KeyboardButton("test(New teacher)") });
            keyboard.ResizeKeyboard = true;
            return keyboard;
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
        
    }
}
