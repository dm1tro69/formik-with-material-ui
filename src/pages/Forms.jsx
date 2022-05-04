import React from 'react';
import {Card, CardContent} from "@mui/material";
import {CheckboxWithLabel, TextField} from 'formik-material-ui'
import {Formik, Form, Field} from "formik";

const Forms = () => {
    return (
        <Card>
            <CardContent>
                <Formik initialValues={{
                    firstName: '',
                    lastName: '',
                    millionaire: false,
                    money: 0,
                    description: ''
                }}
                onSubmit={(values)=> console.log(values)}
                >
                 <Form>
                     <Field
                         name={'firstName'}
                         component={TextField}
                         label={'First Name'}
                     />
                     <Field
                         name={'lastName'}
                         component={TextField}
                         label={'Last Name'}
                     />
                     <Field
                         name={'millionaire'}
                         component={CheckboxWithLabel}
                         type={'checkbox'}
                         label={{label: 'I am millionaire'}}
                     />
                     <Field
                         name={'money'}
                         type={'number'}
                         component={TextField}
                         label={'Money'}
                     />
                     <Field
                         name={'description'}
                         type={'text'}
                         component={TextField}
                         label={'Description'}
                     />
                 </Form>
                </Formik>
            </CardContent>
        </Card>
    );
};

export default Forms;
