import deepEqual from "fast-deep-equal";
import type { ReactNode } from "react";
import {
  type AnyObject,
  Form as FForm,
  type FormProps as FFormProps,
  type FormRenderProps,
} from "react-final-form";
import type { ValidationErrors } from "final-form";

import { zodValidate } from "./zod-validate";
import type { z } from "zod";

type FormProps<
  Schema extends z.ZodObject<any, any, any>,
  FormValues = z.TypeOf<Schema>,
  InitialFormValues = Partial<FormValues>
> = FFormProps<FormValues, InitialFormValues> & {
  schema: Schema;
  children: (
    props: FormRenderProps<FormValues, InitialFormValues>
  ) => ReactNode;
};

export const Form: <
  Schema extends z.ZodObject<AnyObject, any, any>,
  FormValues = z.TypeOf<Schema>,
  InitialFormValues = Partial<FormValues>
>(
  props: FormProps<Schema, FormValues, InitialFormValues>
) => React.ReactElement = ({ schema, onSubmit, children, ...props }) => {
  const validate: (values: any) => ValidationErrors = zodValidate(schema);
  return (
    <FForm
      {...props}
      onSubmit={onSubmit}
      initialValues={props.initialValues}
      initialValuesEqual={deepEqual}
      validate={validate}
    >
      {({ ...rest }) => <>{children({ ...rest })}</>}
    </FForm>
  );
};
