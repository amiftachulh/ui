import { Card, CardContent } from "@/registry/default/ui/card";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/default/ui/field";

const options = [
  {
    label: "Social Media",
    value: "social-media",
  },

  {
    label: "Search Engine",
    value: "search-engine",
  },
  {
    label: "Referral",
    value: "referral",
  },
  {
    label: "Other",
    value: "other",
  },
];

export function FieldHear() {
  return (
    <Card css={{ py: "4", shadow: "none" }}>
      <CardContent css={{ px: "4" }}>
        <form>
          <FieldGroup>
            <FieldSet css={{ gap: "4" }}>
              <FieldLegend>How did you hear about us?</FieldLegend>
              <FieldDescription css={{ lineClamp: "1" }}>
                Select the option that best describes how you heard about us.
              </FieldDescription>
              <FieldGroup css={{ display: "flex", flexDir: "row", flexWrap: "wrap", gap: "2" }}>
                {options.map((option) => (
                  <FieldLabel htmlFor={option.value} key={option.value} css={{ w: "fit!" }}>
                    <Field
                      orientation="horizontal"
                      css={{
                        overflow: "hidden",
                        gap: "1.5",
                        px: "3!",
                        py: "1.5!",
                        transition: "all 100ms linear",
                        "[data-slot=field-label]:has(input[data-state=checked]) &": {
                          px: "2!",
                        },
                      }}
                    >
                      <Checkbox
                        value={option.value}
                        id={option.value}
                        defaultChecked={option.value === "social-media"}
                        css={{
                          ml: "-6",
                          transform: "translateX(-4px)",
                          rounded: "full",
                          transition: "all 100ms linear",
                          "&[data-state=checked]": {
                            ml: "0",
                            transform: "translateX(0)",
                          },
                        }}
                      />
                      <FieldTitle css={{ whiteSpace: "nowrap" }}>{option.label}</FieldTitle>
                    </Field>
                  </FieldLabel>
                ))}
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
