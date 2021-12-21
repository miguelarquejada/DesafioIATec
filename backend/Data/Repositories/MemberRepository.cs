using backend.Data.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Data.Repositories
{
    public class MemberRepository : IMemberRepository
    {
        private readonly ApplicationContext _context;

        public MemberRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Member>> GetAll()
        {
            return await _context.Member.Include(m => m.Address)
                            .AsNoTracking().ToListAsync();
        }

        public async Task<Member> GetById(long id)
        {
            return await _context.Member.Include(m => m.Address).FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<Member> Insert(Member newMember)
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

            return member;
        }

        public async Task Update(long id, Member updatedMember)
        {
            var member = await GetById(id);

            member.Name = updatedMember.Name;
            member.IsBaptized = updatedMember.IsBaptized;
            member.Address = updatedMember.Address;
            member.Birthday = updatedMember.Birthday;
            member.BaptismDate = updatedMember.BaptismDate;

            await _context.SaveChangesAsync();
        }

        public async Task Delete(Member member)
        {
            _context.Member.Remove(member);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(long id)
        {
            _context.Member.Remove(await GetById(id));
            await _context.SaveChangesAsync();
        }

        public async Task<int> GetMemberTotal()
        {
            return await _context.Member.CountAsync();
        }

        public async Task<int> GetTotalBaptizedMembers()
        {
            return await _context.Member.Where(m => m.IsBaptized == true).CountAsync();
        }

        public async Task<Member> GetOldestMember()
        {
            return await _context.Member.Include(m => m.Address)
                .AsNoTracking().OrderBy(m => m.Birthday).FirstOrDefaultAsync();
        }

        public async Task<DateTime?> GetMostRecentBaptism()
        {
            var member = await _context.Member.OrderByDescending(m => m.BaptismDate).FirstOrDefaultAsync();
            return member.BaptismDate;
        }

        public async Task<IEnumerable<Member>> GetAllBaptizedMembers()
        {
            return await _context.Member.Include(m => m.Address)
                .AsNoTracking().Where(m => m.IsBaptized == true).ToListAsync();
        }
    }
}
