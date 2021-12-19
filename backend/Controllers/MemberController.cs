using backend.Data;
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

        public MemberController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Member>>> GetAll()
        {
            return await _context.Member.Include(m => m.Address)
                            .AsNoTracking().ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Member>> GetById(long id)
        {
            var member = await _context.Member.Include(m => m.Address)
                .AsNoTracking().FirstOrDefaultAsync(m => m.Id == id);

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

                var member = await _context.Member.FindAsync(id);
                if (member == null)
                    return NotFound();

                member.Name = updatedMember.Name;
                member.IsBaptized = updatedMember.IsBaptized;
                member.Address = updatedMember.Address;
                member.Birthday = updatedMember.Birthday;
                member.BaptismDate = updatedMember.BaptismDate;

                await _context.SaveChangesAsync();
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
            var member = new Member
            {
                Name = newMember.Name,
                IsBaptized = newMember.IsBaptized,
                Address = newMember.Address,
                Birthday = newMember.Birthday,
                BaptismDate = newMember.BaptismDate ?? null
            };

            _context.Member.Add(member);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetById),
                new { id = member.Id },
                member
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var member = await _context.Member.FindAsync(id);
            if (member == null)
                return NotFound();

            _context.Member.Remove(member);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
