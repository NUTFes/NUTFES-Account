from datetime import datetime
from pydantic import BaseModel
import typing as t

class BureauBase(BaseModel):
    name: str
    
class BureauOut(BureauBase):
    pass

class BureauCreate(BureauBase):
    name: str
    class Config:
        orm_mode = True

class BureauEdit(BureauBase):
    name: str
    class Config:
        orm_mode = True

class Bureau(BureauBase):
    id: int
    name: str
    class Config:
        orm_mode = True