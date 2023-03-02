/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { AnyObject, ValidationErrors } from "final-form";
import type { z } from "zod";

export const zodValidate =
  <T = AnyObject>(schema: z.Schema<T>) =>
  (values: T): ValidationErrors => {
    try {
      schema.parse(values);
      return undefined;
    } catch (e) {
      const err = e as z.ZodError;
      return err;
    }
  };
