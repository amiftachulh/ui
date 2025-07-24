"use client";

import * as React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { defineStepper } from "@/components/ui/stepper";
import { toast } from "@/hooks/use-toast";

const shippingSchema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(5, "Postal code is required"),
});

const paymentSchema = z.object({
  cardNumber: z.string().min(16, "Card number is required"),
  expirationDate: z.string().min(5, "Expiration date is required"),
  cvv: z.string().min(3, "CVV is required"),
});

type ShippingFormValues = z.infer<typeof shippingSchema>;
type PaymentFormValues = z.infer<typeof paymentSchema>;

const ShippingForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ShippingFormValues>();

  return (
    <styled.div css={{ spaceY: "4", textAlign: "start" }}>
      <styled.div css={{ spaceY: "2" }}>
        <Label htmlFor={register("address").name}>Address</Label>
        <Input id={register("address").name} {...register("address")} />
        {errors.address && (
          <styled.span css={{ textStyle: "sm", color: "danger" }}>
            {errors.address.message}
          </styled.span>
        )}
      </styled.div>
      <styled.div css={{ spaceY: "2" }}>
        <Label htmlFor={register("city").name}>City</Label>
        <Input id={register("city").name} {...register("city")} />
        {errors.city && (
          <styled.span css={{ textStyle: "sm", color: "danger" }}>
            {errors.city.message}
          </styled.span>
        )}
      </styled.div>
      <styled.div css={{ spaceY: "2" }}>
        <Label htmlFor={register("postalCode").name}>Postal Code</Label>
        <Input id={register("postalCode").name} {...register("postalCode")} />
        {errors.postalCode && (
          <styled.span css={{ textStyle: "sm", color: "danger" }}>
            {errors.postalCode.message}
          </styled.span>
        )}
      </styled.div>
    </styled.div>
  );
};

function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PaymentFormValues>();

  return (
    <styled.div css={{ spaceY: "4", textAlign: "start" }}>
      <styled.div css={{ spaceY: "4" }}>
        <Label htmlFor={register("cardNumber").name}>Card Number</Label>
        <Input id={register("cardNumber").name} {...register("cardNumber")} />
        {errors.cardNumber && (
          <styled.span css={{ textStyle: "sm", color: "danger" }}>
            {errors.cardNumber.message}
          </styled.span>
        )}
      </styled.div>
      <styled.div css={{ spaceY: "2" }}>
        <Label htmlFor={register("expirationDate").name}>Expiration Date</Label>
        <Input id={register("expirationDate").name} {...register("expirationDate")} />
        {errors.expirationDate && (
          <styled.span css={{ textStyle: "sm", color: "danger" }}>
            {errors.expirationDate.message}
          </styled.span>
        )}
      </styled.div>
      <styled.div css={{ spaceY: "2" }}>
        <Label htmlFor={register("cvv").name}>CVV</Label>
        <Input id={register("cvv").name} {...register("cvv")} />
        {errors.cvv && (
          <styled.span css={{ textStyle: "sm", color: "danger" }}>{errors.cvv.message}</styled.span>
        )}
      </styled.div>
    </styled.div>
  );
}

function CompleteComponent() {
  return <styled.div css={{ textAlign: "center" }}>Thank you! Your order is complete.</styled.div>;
}

const {
  StepperProvider,
  StepperControls,
  StepperNavigation,
  StepperStep,
  StepperTitle,
  useStepper,
} = defineStepper(
  {
    id: "shipping",
    title: "Shipping",
    schema: shippingSchema,
    Component: ShippingForm,
  },
  {
    id: "payment",
    title: "Payment",
    schema: paymentSchema,
    Component: PaymentForm,
  },
  {
    id: "complete",
    title: "Complete",
    schema: z.object({}),
    Component: CompleteComponent,
  }
);

export default function StepperForm() {
  return (
    <StepperProvider>
      <FormStepperComponent />
    </StepperProvider>
  );
}

const FormStepperComponent = () => {
  const methods = useStepper();

  const form = useForm({
    mode: "onTouched",
    resolver: zodResolver(methods.current.schema),
  });

  const onSubmit = form.handleSubmit((data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <styled.pre
          css={{ mt: "2", w: "340px", rounded: "md", bg: "slate.950", p: "4", borderWidth: "1px" }}
        >
          <styled.code css={{ color: "white" }}>{JSON.stringify(data, null, 2)}</styled.code>
        </styled.pre>
      ),
    });
  });

  return (
    <styled.form onSubmit={onSubmit} css={{ spaceY: "4" }}>
      <StepperNavigation>
        {methods.all.map((step) => (
          <StepperStep
            key={step.id}
            of={step.id}
            type={step.id === methods.current.id ? "submit" : "button"}
            onClick={async () => {
              const valid = await form.trigger();
              if (!valid) return;
              methods.goTo(step.id);
            }}
          >
            <StepperTitle>{step.title}</StepperTitle>
          </StepperStep>
        ))}
      </StepperNavigation>
      {methods.switch({
        shipping: ({ Component }) => <Component />,
        payment: ({ Component }) => <Component />,
        complete: ({ Component }) => <Component />,
      })}
      <StepperControls>
        {!methods.isLast && (
          <Button variant="secondary" onClick={methods.prev} disabled={methods.isFirst}>
            Previous
          </Button>
        )}
        <Button
          type="submit"
          onClick={() => {
            if (methods.isLast) {
              return methods.reset();
            }
            methods.beforeNext(async () => {
              const valid = await form.trigger();
              if (!valid) return false;
              return true;
            });
          }}
        >
          {methods.isLast ? "Reset" : "Next"}
        </Button>
      </StepperControls>
    </styled.form>
  );
};
