import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      {" "}
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {() => (
          <Form>
            <CustomInput
              label="Kullancı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
