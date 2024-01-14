import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import {
  DEFAULT_THEME_COLOR,
  GeneralSetting,
  changeSettings,
  selectSettings,
} from "@/app/lib/redux/settingsSlice";
import { BaseForm } from "../Form";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { InlineInput } from "./InlineInput";
import { THEME_COLORS } from "./constants";
import { InputGroupWrapper } from "../Form/InputGroup";
import {
  DocumentSizeSelections,
  FontFamilySelectionCSR,
  FontSizeSelections,
} from "./Selection";
import { FontFamily } from "../../fonts/constants";
import { CheckIcon } from "@radix-ui/react-icons";

export const ThemeForm = () => {
  const settings = useAppSelector(selectSettings);
  const { fontSize, fontFamily, documentSize } = settings;
  const themeColor = settings.themeColor || DEFAULT_THEME_COLOR;
  const dispatch = useAppDispatch();

  const handleSettingsChange = (field: GeneralSetting, value: string) => {
    dispatch(changeSettings({ field, value }));
  };

  return (
    <BaseForm>
      <div className="">
        <div className="flex flex-col mb-8 gap-8">
          <div className="flex items-center gap-2">
            <Cog6ToothIcon
              className="h-6 w-6 text-gray-600"
              aria-hidden="true"
            />
            <h1 className="text-lg font-semibold tracking-wide text-gray-900">
              Resume Setting
            </h1>
          </div>

          <div>
            <InlineInput
              label="Theme"
              name="themeColor"
              value={settings.themeColor}
              placeholder={DEFAULT_THEME_COLOR}
              onChange={handleSettingsChange}
              // inputStyle={{ color: themeColor }}
            />
          </div>
          <div className=" flex flex-wrap gap-3 ">
            {THEME_COLORS.map((color, idx) => (
              <div
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-sm text-white border shadow-lg hover:scale-110 duration-300 focus:bg-slate-500 "
                style={{ backgroundColor: color }}
                key={idx}
                onClick={() => handleSettingsChange("themeColor", color)}
                onKeyDown={(e) => {
                  if (["Enter", " "].includes(e.key)) {
                    handleSettingsChange("themeColor", color);
                  }
                }}
                tabIndex={0}
              >
                {settings.themeColor === color ? <CheckIcon /> : ""}
              </div>
            ))}
          </div>
        </div>




        <div>
          <div>
            <InputGroupWrapper label="Font Family" />
            <FontFamilySelectionCSR
              selectedFontFamily={fontFamily}
              themeColor="#3b3b3b"
              handleSettingsChange={handleSettingsChange}
            />
          </div>
          <div>
            <InlineInput
              label="Font Size"
              name="fontSize"
              value={fontSize}
              placeholder="11"
              onChange={handleSettingsChange}
            />
            <FontSizeSelections
              fontFamily={fontFamily as FontFamily}
              themeColor="#3b3b3b"
              selectedFontSize={fontSize}
              handleSettingsChange={handleSettingsChange}
            />
          </div>
          <div>
            <InputGroupWrapper label="Document Size" />
            <DocumentSizeSelections
              themeColor="#3b3b3b"
              selectedDocumentSize={documentSize}
              handleSettingsChange={handleSettingsChange}
            />
          </div>
        </div>
      </div>
    </BaseForm>
  );
};
