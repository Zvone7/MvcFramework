﻿using System;

namespace MvcFrameworkCml
{
    public abstract class BaseModel
    {
        public Int32 Id;
        public BaseModel(Int32 id)
        {
            Id = id;
        }
    }
}