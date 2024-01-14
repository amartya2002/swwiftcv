import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { changeProfile, selectProfile } from "@/app/lib/redux/resumeSlice";
import { BaseForm } from "./Form";
import { Inputi } from "./Form/InputGroup";
import { Input } from "@/components/ui/input";
import { ResumeProfile } from "@/app/lib/redux/types";
import { INPUT_CLASS_NAME } from "./Form/InputGroup";
import { InputGroupWrapper } from "./Form/InputGroup";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-8">
        <Inputi
          label="Name"
          labelClassName="col-span-full "
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleProfileChange}
          
        />
        <Inputi
          label="Objective"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Entrepreneur and innovator obsessed with making exceptional products"
          value={summary}
          onChange={handleProfileChange}
        />
        <Inputi
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="hello@world.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Inputi
          label="Phone"
          labelClassName="col-span-2"
          name="phone"
          placeholder="(123)456-7890"
          value={phone}
          onChange={handleProfileChange}
        />
        <Inputi
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="linkedin.com/in/yourname"
          value={url}
          onChange={handleProfileChange}
        />
        <Inputi
          label="Location"
          labelClassName="col-span-2"
          name="location"
          placeholder="CITY, STATE"
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
