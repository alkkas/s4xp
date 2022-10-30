using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Telegram.Bot;
using Telegram.Bot.Types;

namespace Hakaton_bot
{

    public class Student 
    {
        public Student(string selfId, string courceId, long tgId)
        {
            this.TgId = tgId;
            this.SelfId = selfId;
            this.CourceId = courceId;
        }
        public int Id { get; set; }
        public string SelfId { get; set; }
        public long TgId { get; set; }
        public string? CourceId { get; set; }
    }
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public ApplicationDbContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=HakatonBase.db");
        }
    }
}

