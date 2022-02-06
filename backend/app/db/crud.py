from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t

from . import models, schemas
from app.core.security import get_password_hash


def get_user(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def get_user_by_email(db: Session, email: str) -> schemas.UserBase:
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.UserOut]:
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        number=user.number,
        email=user.email,
        is_active=user.is_active,
        is_superuser=user.is_superuser,
        
        first_name=user.first_name,
        last_name=user.last_name,
        first_name_kana=user.first_name_kana,
        last_name_kana=user.last_name_kana,
        hashed_password=hashed_password,

        type_id=user.type_id,
        permission_id=user.permission_id,
        user_detail_id=user.user_detail_id,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    user = get_user(db, user_id)
    if not user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    db.delete(user)
    db.commit()
    return user


def edit_user(
    db: Session, user_id: int, user: schemas.UserEdit
) -> schemas.User:
    db_user = get_user(db, user_id)
    if not db_user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    update_data = user.dict(exclude_unset=True)

    if "password" in update_data:
        update_data["hashed_password"] = get_password_hash(user.password)
        del update_data["password"]

    for key, value in update_data.items():
        setattr(db_user, key, value)

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user







def get_type(db: Session, type_id: int):
    type = db.query(models.Type).filter(models.Type.id == type_id).first()
    if not type:
        raise HTTPException(status_code=404, detail="Type not found")
    return type


def get_type_by_name(db: Session, name: str) -> schemas.TypeBase:
    return db.query(models.Type).filter(models.Type.name == name).first()


def get_types(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.TypeOut]:
    return db.query(models.Type).offset(skip).limit(limit).all()


def create_type(db: Session, type: schemas.TypeCreate):
    db_type = models.Type(name=type.name)
    db.add(db_type)
    db.commit()
    db.refresh(db_type)
    return db_type


def delete_type(db: Session, type_id: int):
    type = get_type(db, type_id)
    if not type:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Type not found")
    db.delete(type)
    db.commit()
    return type


def edit_type(
    db: Session, type_id: int, type: schemas.TypeEdit
) -> schemas.Type:
    db_type = get_type(db, type_id)
    if not db_type:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Type not found")
    update_data = type.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_type, key, value)

    db.add(db_type)
    db.commit()
    db.refresh(db_type)
    return db_type








def get_permission(db: Session, permission_id: int):
    permission = db.query(models.Permission).filter(models.Permission.id == permission_id).first()
    if not permission:
        raise HTTPException(status_code=404, detail="Permission not found")
    return permission


def get_permission_by_name(db: Session, name: str) -> schemas.PermissionBase:
    return db.query(models.Permission).filter(models.Permission.name == name).first()


def get_permissions(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.PermissionOut]:
    return db.query(models.Permission).offset(skip).limit(limit).all()


def create_permission(db: Session, permission: schemas.PermissionCreate):
    db_permission = models.Permission(name=permission.name)
    db.add(db_permission)
    db.commit()
    db.refresh(db_permission)
    return db_permission


def delete_permission(db: Session, permission_id: int):
    permission = get_permission(db, permission_id)
    if not permission:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Permission not found")
    db.delete(permission)
    db.commit()
    return permission


def edit_permission(
    db: Session, permission_id: int, permission: schemas.PermissionEdit
) -> schemas.Permission:
    db_permission = get_permission(db, permission_id)
    if not db_permission:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Permission not found")
    update_data = permission.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_permission, key, value)

    db.add(db_permission)
    db.commit()
    db.refresh(db_permission)
    return db_permission








def get_user_detail(db: Session, user_detail_id: int):
    user_detail = db.query(models.UserDetail).filter(models.UserDetail.id == user_detail_id).first()
    if not user_detail:
        raise HTTPException(status_code=404, detail="UserDetail not found")
    return user_detail


def get_user_details(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.UserDetailOut]:
    return db.query(models.UserDetail).offset(skip).limit(limit).all()


def create_user_detail(db: Session, user_detail: schemas.UserDetailCreate):
    db_user_detail = models.UserDetail(
        sex_id=user_detail.sex_id,
        birth=user_detail.birth,
        tel=user_detail.tel,
        grade_id=user_detail.grade_id,
        major_id=user_detail.major_id,
        bureau_id=user_detail.bureau_id,
        department_id=user_detail.department_id,
        position_id=user_detail.position_id
    )
    db.add(db_user_detail)
    db.commit()
    db.refresh(db_user_detail)
    return db_user_detail


def delete_user_detail(db: Session, user_detail_id: int):
    user_detail = get_user_detail(db, user_detail_id)
    if not user_detail:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="UserDetail not found")
    db.delete(user_detail)
    db.commit()
    return user_detail


def edit_user_detail(
    db: Session, user_detail_id: int, user_detail: schemas.UserDetailEdit
) -> schemas.UserDetail:
    db_user_detail = get_user_detail(db, user_detail_id)
    if not db_user_detail:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="UserDetail not found")
    update_data = user_detail.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_user_detail, key, value)

    db.add(db_user_detail)
    db.commit()
    db.refresh(db_user_detail)
    return db_user_detail






def get_sex(db: Session, sex_id: int):
    sex = db.query(models.Sex).filter(models.Sex.id == sex_id).first()
    if not sex:
        raise HTTPException(status_code=404, detail="Sex not found")
    return sex


def get_sex_by_name(db: Session, name: str) -> schemas.SexBase:
    return db.query(models.Sex).filter(models.Sex.name == name).first()


def get_sexs(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.SexOut]:
    return db.query(models.Sex).offset(skip).limit(limit).all()


def create_sex(db: Session, sex: schemas.SexCreate):
    db_sex = models.Sex(name=sex.name)
    db.add(db_sex)
    db.commit()
    db.refresh(db_sex)
    return db_sex





def get_grade(db: Session, grade_id: int):
    grade = db.query(models.Grade).filter(models.Grade.id == grade_id).first()
    if not grade:
        raise HTTPException(status_code=404, detail="Grade not found")
    return grade


def get_grade_by_name(db: Session, name: str) -> schemas.GradeBase:
    return db.query(models.Grade).filter(models.Grade.name == name).first()


def get_grades(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.GradeOut]:
    return db.query(models.Grade).offset(skip).limit(limit).all()


def create_grade(db: Session, grade: schemas.GradeCreate):
    db_grade = models.Grade(name=grade.name)
    db.add(db_grade)
    db.commit()
    db.refresh(db_grade)
    return db_grade







def get_major(db: Session, major_id: int):
    major = db.query(models.Major).filter(models.Major.id == major_id).first()
    if not major:
        raise HTTPException(status_code=404, detail="Major not found")
    return major


def get_major_by_name(db: Session, name: str) -> schemas.MajorBase:
    return db.query(models.Major).filter(models.Major.name == name).first()


def get_majors(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.MajorOut]:
    return db.query(models.Major).offset(skip).limit(limit).all()


def create_major(db: Session, major: schemas.MajorCreate):
    db_major = models.Major(name=major.name)
    db.add(db_major)
    db.commit()
    db.refresh(db_major)
    return db_major




def get_bureau(db: Session, bureau_id: int):
    bureau = db.query(models.Bureau).filter(models.Bureau.id == bureau_id).first()
    if not bureau:
        raise HTTPException(status_code=404, detail="Bureau not found")
    return bureau


def get_bureau_by_name(db: Session, name: str) -> schemas.BureauBase:
    return db.query(models.Bureau).filter(models.Bureau.name == name).first()


def get_bureaus(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.BureauOut]:
    return db.query(models.Bureau).offset(skip).limit(limit).all()


def create_bureau(db: Session, bureau: schemas.BureauCreate):
    db_bureau = models.Bureau(name=bureau.name)
    db.add(db_bureau)
    db.commit()
    db.refresh(db_bureau)
    return db_bureau





def get_department(db: Session, department_id: int):
    department = db.query(models.Department).filter(models.Department.id == department_id).first()
    if not department:
        raise HTTPException(status_code=404, detail="Department not found")
    return department


def get_department_by_name(db: Session, name: str) -> schemas.DepartmentBase:
    return db.query(models.Department).filter(models.Department.name == name).first()


def get_departments(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.DepartmentOut]:
    return db.query(models.Department).offset(skip).limit(limit).all()


def create_department(db: Session, department: schemas.DepartmentCreate):
    db_department = models.Department(name=department.name)
    db.add(db_department)
    db.commit()
    db.refresh(db_department)
    return db_department







def get_position(db: Session, position_id: int):
    position = db.query(models.Position).filter(models.Position.id == position_id).first()
    if not position:
        raise HTTPException(status_code=404, detail="Position not found")
    return position


def get_position_by_name(db: Session, name: str) -> schemas.PositionBase:
    return db.query(models.Position).filter(models.Position.name == name).first()


def get_positions(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.PositionOut]:
    return db.query(models.Position).offset(skip).limit(limit).all()


def create_position(db: Session, position: schemas.PositionCreate):
    db_position = models.Position(name=position.name)
    db.add(db_position)
    db.commit()
    db.refresh(db_position)
    return db_position