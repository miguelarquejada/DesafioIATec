﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Member
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public bool IsBaptized { get; set; }

        public long AddressId { get; set; }

        public DateTime Birthday { get; set; }

        public DateTime? BaptismDate { get; set; }

        public virtual Address Address { get; set; }
    }
}
