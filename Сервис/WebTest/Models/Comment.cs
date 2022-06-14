using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebTest.Models
{
    public class Comment
    {
        public int CommentId { get; set; }
        public int IdContact { get; set; }
        public int IdTheme { get; set; }
        public string Content { get; set; }
    }
}