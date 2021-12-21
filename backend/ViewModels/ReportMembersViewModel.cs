using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ViewModels
{
    public class ReportMembersViewModel
    {
        public int MemberTotal { get; set; }
        public int TotalBaptizedMembers { get; set; }
        public string OldestMember { get; set; }
        public int OldestMemberAge  { get; set; }
        public DateTime? MostRecentBaptism  { get; set; }
    }
}
