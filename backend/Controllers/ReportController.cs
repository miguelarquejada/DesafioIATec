using backend.Data.Interfaces;
using backend.Models;
using backend.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReportController : ControllerBase
    {
        private readonly IMemberRepository _memberRepository;

        public ReportController(IMemberRepository memberRepository)
        {
            _memberRepository = memberRepository;
        }

        [HttpGet]
        [Route("members")]
        public async Task<ActionResult<ReportMembersViewModel>> GetReportMembers()
        {
            var memberTotal = await _memberRepository.GetMemberTotal();
            var totalBaptizedMembers = await _memberRepository.GetTotalBaptizedMembers();
            var oldestMember = await _memberRepository.GetOldestMember();
            var mostRecentBaptism = await _memberRepository.GetMostRecentBaptism();

            return new ReportMembersViewModel
            {
                MemberTotal = memberTotal,
                TotalBaptizedMembers = totalBaptizedMembers,
                OldestMember = oldestMember.Name,
                OldestMemberAge = GetMemberAge(oldestMember.Birthday),
                MostRecentBaptism = mostRecentBaptism
            };
        }

        [HttpGet]
        [Route("members/baptized")]
        public async Task<ActionResult<IEnumerable<Member>>> GetBaptizedMembers()
        {
            var members = await _memberRepository.GetAllBaptizedMembers();
            return members.OrderBy(m => (DateTime.Now) - m.Birthday).ToList();
        }

        private int GetMemberAge(DateTime birthdayMember)
        {
            var age = DateTime.Now.Year - birthdayMember.Year;
            if (DateTime.Now.DayOfYear < birthdayMember.DayOfYear)
                age = age - 1;

            return age;
        }
    }
}
