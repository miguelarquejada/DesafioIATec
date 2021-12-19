using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Address
    {
        public long Id { get; set; }

        public int Number { get; set; }

        public string HouseStreet { get; set; }

        public string OptionalAddOns { get; set; }

        public string Cep { get; set; }
    }
}
