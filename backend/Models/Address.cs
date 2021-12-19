using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Address
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public int Number { get; set; }

        [Required]
        public string HouseStreet { get; set; }

        public string OptionalAddOns { get; set; }

        [Required]
        public int Cep { get; set; }
    }
}
