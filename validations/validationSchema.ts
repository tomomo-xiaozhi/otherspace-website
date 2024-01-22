// validationSchema.ts
import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  name: Yup.string().required("名前は必須です"),
  email: Yup.string()
    .email("有効なメールアドレスを入力してください")
    .required("メールアドレスは必須です"),
  message: Yup.string().required("メッセージは必須です"),
});
