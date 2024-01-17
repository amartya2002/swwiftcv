import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import {
  ShowForm,
  changeFormHeading,
  changeFormOrder,
  changeShowForm,
  selectHeadingByForm,
  selectIsFirstForm,
  selectIsLastForm,
  selectShowByForm,
} from "@/app/lib/redux/settingsSlice";
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  LightBulbIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";
import { DeletIconButton, MoveIconButton, ShowIconButton } from "./IconButton";
import { ExpanderWithHeightTransition } from "../../ExpanderWithHeightTransition";
import {
  addSectionInForm,
  deleteSectionInFormByIdx,
  moveSectionInForm,
} from "@/app/lib/redux/resumeSlice";
import { Button } from "@/components/ui/button";

const FORM_TO_ICON: { [section in ShowForm]: typeof BuildingOfficeIcon } = {
  workExperiences: BuildingOfficeIcon,
  educations: AcademicCapIcon,
  projects: LightBulbIcon,
  skills: WrenchIcon,
  custom: WrenchIcon,
};

export const BaseForm = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    className={`flex flex-col gap- rounded-xl bg-white p-8 border ${className}`}
  >
    {children}
  </section>
);

export const Form = ({
  form,
  addButtonText,
  children,
}: {
  form: ShowForm;
  addButtonText?: string;
  children: React.ReactNode;
}) => {
  const showForm = useAppSelector(selectShowByForm(form));
  const heading = useAppSelector(selectHeadingByForm(form));

  const dispatch = useAppDispatch();

  const setShowForm = (showForm: boolean) => {
    dispatch(changeShowForm({ field: form, value: showForm }));
  };

  const setHeading = (heading: string) => {
    dispatch(changeFormHeading({ field: form, value: heading }));
  };

  const isFirstForm = useAppSelector(selectIsFirstForm(form));
  const isLastForm = useAppSelector(selectIsLastForm(form));

  const handleMoveclick = (type: "up" | "down") => {
    dispatch(changeFormOrder({ form, type }));
  };

  const Icon = FORM_TO_ICON[form];

  return (
    <BaseForm
      className={`transition-opacity duration-200 ${
        showForm ? "pb-6" : "pb-2 opacity-40"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-1.5">
          <p className="text-xl">&#10023;</p>
          <Input
            
            className=" w-full text-xl font-medium  border-none p-0"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-0.5">
          {!isFirstForm && (
            <MoveIconButton type="up" onClick={handleMoveclick} />
          )}
          {!isLastForm && (
            <MoveIconButton type="down" onClick={handleMoveclick} />
          )}
          <ShowIconButton show={showForm} setShow={setShowForm} />
        </div>
      </div>
      <ExpanderWithHeightTransition expanded={showForm}>
        {children}
      </ExpanderWithHeightTransition>
      {showForm && addButtonText && (
        <div className=" flex justify-end">
          <Button
            type="button"
            onClick={() => {
              dispatch(addSectionInForm({ form }));
            }}
            className="bg-[#3b3b3b]"
          >
            &#43; {addButtonText}
          </Button>
        </div>
      )}
    </BaseForm>
  );
};

export const FormSection = ({
  form,
  idx,
  showMoveUp,
  showMoveDown,
  showDelete,
  deleteButtonTooltipText,
  children,
}: {
  form: ShowForm;
  idx: number;
  showMoveUp: boolean;
  showMoveDown: boolean;
  showDelete: boolean;
  deleteButtonTooltipText: string;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteSectionInFormByIdx({ form, idx }));
  };

  const handleMoveClick = (direction: "up" | "down") => {
    dispatch(moveSectionInForm({ form, direction, idx }));
  };

  return (
    <>
      {idx !== 0 && <hr className="my-6" />}
      <div className=" relative grid grid-cols-6 gap-8 py-7 px-1">
        {children}
        <div className={` absolute right-0 top-0 flex gap-0.5`}>
          <div
            className={`transition-all duration-300 ${
              showMoveUp ? "" : "invisible opacity-0"
            } ${showMoveDown ? "" : "-mr-6"}`}
          >
            <MoveIconButton
              type="up"
              size="small"
              onClick={() => handleMoveClick("up")}
            />
          </div>
          <div
            className={`transition-all duration-300 ${
              showMoveUp ? "" : "invisible opacity-0"
            }`}
          >
            <MoveIconButton
              type="down"
              size="small"
              onClick={() => handleMoveClick("down")}
            />
          </div>
          <div
            className={`transition-all duration-300 ${
              showDelete ? "" : "invisible opacity-0"
            }`}
          >
            <DeletIconButton
              onClick={handleDeleteClick}
              tooltipText={deleteButtonTooltipText}
            />
          </div>
        </div>
      </div>
    </>
  );
};
