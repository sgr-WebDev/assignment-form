import "./App.css";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./Form/FormikControl";
import axios from "axios";
import moment from "moment";

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    axios.get("/fetch").then((data) => setData(data.data));
  }, [update]);
  return (
    <div className="grid items-center justify-center min-h-screen">
      <div className="border-collapse border-2">
        <nav className="border-2">
          <p className="text-3xl p-2">I</p>
        </nav>
        <div>
          <div className="m-2">
            <Formik
              initialValues={{
                text: "",
              }}
              validationSchema={Yup.object({
                text: Yup.string().required("This feid is required!!").max(120),
              })}
              onSubmit={(values) => {
                console.log(values);
                axios
                  .post("/save", { ...values })
                  .then((data) => {
                    if (update === true) {
                      setUpdate(false);
                    } else {
                      setUpdate(true);
                    }
                  })
                  .catch((err) => console.log(err));
              }}
            >
              {(formik) => (
                <Form>
                  <FormikControl
                    className="min-w-full text-2xl border-2 border-red-500 p-2 "
                    control="textarea"
                    name="text"
                    placeholder="Place your Thoughts"
                  />
                  <div className="grid items-center justify-end">
                    <button
                      type="submit"
                      className="bg-red-400 px-10 py-2 text-lg font-bold text-white cursor-pointer hover:bg-red-500 m-2"
                    >
                      Send
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div>
            {data.map((val) => {
              return (
                <div className="border-2">
                  <p className="px-2 pt-2">{val.text}</p>
                  <div className="grid items-center justify-end">
                    <p className="text-red-400 p-2">
                      {moment(val.date).format("HH:mm")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
