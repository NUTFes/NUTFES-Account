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


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str = None
    permissions: str = "user"


class TypeBase(BaseModel):
    name: str
    
class TypeOut(TypeBase):
    pass

class TypeCreate(TypeBase):
    name: str
    class Config:
        orm_mode = True

class TypeEdit(TypeBase):
    name: str
    class Config:
        orm_mode = True

class Type(TypeBase):
    id: int
    name: str
    class Config:
        orm_mode = True


class PermissionBase(BaseModel):
    name: str
    
class PermissionOut(PermissionBase):
    pass

class PermissionCreate(PermissionBase):
    name: str
    class Config:
        orm_mode = True

class PermissionEdit(PermissionBase):
    name: str
    class Config:
        orm_mode = True

class Permission(PermissionBase):
    id: int
    name: str
    class Config:
        orm_mode = True


class UserDetailBase(BaseModel):
    sex_id: int
    birth: datetime
    tel: str
    grade_id: int
    major_id: int
    bureau_id: int
    department_id: int
    position_id: int
    
class UserDetail(UserDetailBase):
    pass

class UserDetailCreate(UserDetailBase):
    class Config:
        orm_mode = True

class UserDetailEdit(UserDetailBase):
    class Config:
        orm_mode = True

class UserDetail(UserDetailBase):
    id: int
    updated_at: datetime
    created_at: datetime
    class Config:
        orm_mode = True


class SexBase(BaseModel):
    name: str
    
class SexOut(SexBase):
    pass

class SexCreate(SexBase):
    name: str
    class Config:
        orm_mode = True

class SexEdit(SexBase):
    name: str
    class Config:
        orm_mode = True

class Sex(SexBase):
    id: int
    name: str
    class Config:
        orm_mode = True


class GradeBase(BaseModel):
    name: str
    
class GradeOut(GradeBase):
    pass

class GradeCreate(GradeBase):
    name: str
    class Config:
        orm_mode = True

class GradeEdit(GradeBase):
    name: str
    class Config:
        orm_mode = True

class Grade(GradeBase):
    id: int
    name: str
    class Config:
        orm_mode = True

class MajorBase(BaseModel):
    name: str
    
class MajorOut(MajorBase):
    pass

class MajorCreate(MajorBase):
    name: str
    class Config:
        orm_mode = True

class MajorEdit(MajorBase):
    name: str
    class Config:
        orm_mode = True

class Major(MajorBase):
    id: int
    name: str
    class Config:
        orm_mode = True


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


class DepartmentBase(BaseModel):
    name: str
    
class DepartmentOut(DepartmentBase):
    pass

class DepartmentCreate(DepartmentBase):
    name: str
    class Config:
        orm_mode = True

class DepartmentEdit(DepartmentBase):
    name: str
    class Config:
        orm_mode = True

class Department(DepartmentBase):
    id: int
    name: str
    class Config:
        orm_mode = True


class PositionBase(BaseModel):
    name: str
    
class PositionOut(PositionBase):
    pass

class PositionCreate(PositionBase):
    name: str
    class Config:
        orm_mode = True

class PositionEdit(PositionBase):
    name: str
    class Config:
        orm_mode = True

class Position(PositionBase):
    id: int
    name: str
    class Config:
        orm_mode = True