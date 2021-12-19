using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Data.Interfaces
{
    public interface IMemberRepository
    {
        /// <summary>
        /// Get member by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Member> GetById(long id);

        /// <summary>
        /// Get alll members
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<Member>> GetAll();
        
        /// <summary>
        /// Update member by id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="updatedMember"></param>
        /// <returns></returns>
        Task Update(long id, Member updatedMember);
        
        /// <summary>
        /// Insert a new member
        /// </summary>
        /// <param name="member"></param>
        /// <returns></returns>
        Task<Member> Insert(Member member);
        
        /// <summary>
        /// Remove member by entity
        /// </summary>
        /// <param name="member"></param>
        /// <returns></returns>
        Task Delete(Member member);
        
        /// <summary>
        /// Remove member by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task Delete(long id);
    }
}
