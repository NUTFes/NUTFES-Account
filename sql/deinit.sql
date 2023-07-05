-- breau department gradeテーブルの削除
DROP TABLE IF EXISTS bureau;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS grade;

-- user_group_membershipのkeycloak_groupへのリレーションを削除
ALTER TABLE ONLY public.user_group_membership
  DROP CONSTRAINT user_group_membership_group_id_fkey;

-- keycloakが作成したテーブルを修正を元に戻す
ALTER INDEX "UK_J3RWUVD56ONTGSUHOGM184WW2_2" RENAME TO "UK_J3RWUVD56ONTGSUHOGM184WW2-2" ;
ALTER INDEX "CONSTRAINT_17_2" RENAME TO "CONSTRAINT_17-2";