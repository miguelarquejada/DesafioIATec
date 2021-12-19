using backend.Data;
using backend.Data.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MemberController : ControllerBase
    {
        private readonly ApplicationContext _context;
        private readonly IMemberRepository _memberRepository;

        public MemberController(ApplicationContext context, IMemberRepository memberRepository)
        {
            _context = context;
            _memberRepository = memberRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Member>>> GetAll()
        {
            var members = await _memberRepository.GetAll();
            return Ok(members);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Member>> GetById(long id)
        {
            var member = await _memberRepository.GetById(id);

            if (member == null)
                return NotFound();

            return member;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, Member updatedMember)
        {
            try
            {
                if (id != updatedMember.Id)
                    return BadRequest();

                var member = await _memberRepository.GetById(id);
                if (member == null)
                    return NotFound();

                await _memberRepository.Update(id, updatedMember);
                return NoContent();
            }
            catch (DbUpdateConcurrencyException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Member>> Post(Member newMember)
        {
            var member = await _memberRepository.Insert(newMember);
            return CreatedAtAction(
                nameof(GetById),
                new { id = member.Id },
                member
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var member = await _memberRepository.GetById(id);
            if (member == null)
                return NotFound();

            _memberRepository.Delete(member);
            return NoContent();
        }
    }
}
