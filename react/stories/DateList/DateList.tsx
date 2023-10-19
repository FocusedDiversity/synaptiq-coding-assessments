import React, { useState } from "react";
import { Button } from '../Button';
import { Popover } from '../Popover';
import { OptionList } from "../OptionList";

export function DateList({ ranges }) {
    const [selected, setSelected] = useState(ranges[0] || null);
    const [popoverActive, setPopoverActive] = useState(false);

    return (
        <Popover
            activator={(
                <Button onClick={() => setPopoverActive(!popoverActive)}>
                    <span className="icon">&#128197;</span> {selected?.title}
                </Button>
            )}
            content={(
                <OptionList
                    options={ranges.map(range => ({
                        value: range.alias,
                        label: range.title,
                    }))}
                    selected={selected?.alias}
                    onChange={value => {
                        setSelected(ranges.find(range => range.alias === value) || null);
                        setPopoverActive(false);
                    }}
                />
            )}
            active={popoverActive}
            onToggle={() => setPopoverActive(!popoverActive)}
        />
    );
}
