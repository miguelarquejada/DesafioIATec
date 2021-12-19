using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Member
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public bool IsBaptized { get; set; }

        [ForeignKey("Address")]
        public long AddressId { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Birthday { get; set; }

        [DataType(DataType.Date)]
        public DateTime? BaptismDate { get; set; }

        public virtual Address Address { get; set; }
    }
}
