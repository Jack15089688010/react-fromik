import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { message } from 'antd'
// import { signIn } from '../services/user'
// import {
//   Link
// } from "react-router-dom";

export default function SignIn(props) {
	const initialValues = {
		// 默认值即使没有， 这个结构也得写, 不然有警告
		email: "",
		password: "",
	};

	const schema = Yup.object({
		email: Yup.string().required("手机号或邮箱不能为空"),
		password: Yup.string().min(8, "密码不能少于8位").required("请填写密码"),
	});

	const handleSubmit = async (values, formikBag) => {
    // 模拟一下  效果。 因为接口不可用 404
    if (values.email === '15056049162@163.com' && values.password === '12345678') {
      props.history.push('/')
    } else { 
      message.error('账户或密码错误')  
    }
    // 调用接口
    // try {
    //   const data = await signIn(values)
    //   props.history.push('/')
    // } catch (error) {
    //   console.log(error);
    // }
    
	};
	return (
		<div className="sign-in">
			<div className="tform in">
				{/* <div className="form-title">
					<span className="active">登录</span><span><Link to="/sign_up">注册</Link></span>
				</div> */}
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={schema}
				>
					<Form>
						<div className="form-item">
							<Field
								name="email"
								placeholder="手机号或邮箱"
								autoComplete="new-password"
								className={`input-style email`}
							/>
							<div className="field-error">
								<ErrorMessage name="email" />
							</div>
						</div>

						<div className="form-item">
							<Field
								name="password"
								placeholder="密码"
								autoComplete="new-password"
								type="password"
								className={`input-style pwd`}
							/>
							<div className="field-error">
								<ErrorMessage name="password" />
							</div>
						</div>

						<input
							className={`sumbit-btn`}
							value="登录"
							type="submit"
						/>
					</Form>
				</Formik>
			</div>
		</div>
	);
}
