from datetime import datetime
from pydantic import BaseModel
import typing as t


class UserBase(BaseModel):
    email: str
    number: int
    is_active: bool = True
    is_superuser: bool = False
    first_name: str = None
    last_name: str = None
    first_name_kana: str = None
    last_name_kana: str = None
    type_id: int
    permission_id: int
    user_detail_id: int

class UserOut(UserBase):
    pass

class UserCreate(UserBase):
    password: str
    class Config:
        orm_mode = True

class UserEdit(UserBase):
    password: t.Optional[str] = None
    class Config:
        orm_mode = True

class User(UserBase):
    id: int
    updated_at: datetime
    created_at: datetime
    class Config:
        orm_mode = True