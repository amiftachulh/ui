import * as React from "react";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { Input } from "@/registry/default/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { ScrollArea } from "@/registry/default/ui/scroll-area";

type PhoneInputProps = Omit<React.ComponentProps<"input">, "onChange" | "value" | "ref"> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  };

const PhoneInputBase = ({ className, onChange, ...props }: PhoneInputProps) => {
  return (
    <RPNInput.default
      className={cx(css({ display: "flex" }), className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      smartCaret={false}
      /**
       * Handles the onChange event.
       *
       * react-phone-number-input might trigger the onChange event as undefined
       * when a valid phone number is not entered. To prevent this,
       * the value is coerced to an empty string.
       *
       * @param {E164Number | undefined} value - The entered value
       */
      onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
      {...props}
    />
  );
};
const PhoneInput = styled(PhoneInputBase);
PhoneInput.displayName = "PhoneInput";

const InputComponent = ({ css, ...props }: React.ComponentProps<typeof Input>) => (
  <Input css={{ roundedStart: "0", roundedEnd: "md", ...css }} {...props} />
);
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          css={{
            display: "flex",
            gap: "1",
            roundedStart: "md",
            roundedEnd: "0",
            borderRightWidth: "0",
            px: "3",
            _focus: { zIndex: 10 },
          }}
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <LuChevronsUpDown
            className={css({ mr: "-2", w: "4", h: "4", _disabled: { display: "none" } })}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "300px", p: "0" }}>
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <ScrollArea css={{ h: "72" }}>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                    />
                  ) : null
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
}

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
}: CountrySelectOptionProps) => {
  return (
    <CommandItem className={css({ gap: "2" })} onSelect={() => onChange(country)}>
      <FlagComponent country={country} countryName={countryName} />
      <span className={css({ flex: "1", textStyle: "sm" })}>{countryName}</span>
      <span
        className={css({ textStyle: "sm", color: "fg/50" })}
      >{`+${RPNInput.getCountryCallingCode(country)}`}</span>
      <LuCheck
        className={css({
          ml: "auto",
          w: "4",
          h: "4",
          opacity: country === selectedCountry ? "1" : "0",
        })}
      />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span
      className={css({
        display: "flex",
        w: "6",
        h: "4",
        overflow: "hidden",
        rounded: "sm",
        bg: "fg/20",
        "& svg": {
          w: "full",
          h: "full",
        },
      })}
    >
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
