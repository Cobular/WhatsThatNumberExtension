import { MouseEvent, useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  WithStyles
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import { createStyles, withStyles } from "@material-ui/core/styles";

const style = createStyles({});

interface DropdownProps extends WithStyles<typeof style> {
  options: string[];
}

function DropdownUnstyled(props: DropdownProps) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  function handleClick() {
    console.info(`You clicked ${props.options[selectedIndex]}`);
  }

  function handleMenuItemClick(
    event: MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) {
    setSelectedIndex(index);
    setOpen(false);
  }

  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  function handleClose(event: MouseEvent<Document, MouseEvent>) {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <ButtonGroup
        variant="outlined"
        color="default"
        ref={anchorRef}
        aria-label="split button"
        size={"small"}
        disableElevation
      >
        <Button onClick={handleClick}>{props.options[selectedIndex]}</Button>
        <Button
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select export mode"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose as any}>
                  <MenuList id="split-button-menu">
                    {props.options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event as any, index)}
                        >
                          {option}
                        </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
        )}
      </Popper>
    </div>
  );
}

const Dropdown = withStyles(style)(DropdownUnstyled);

export { Dropdown };
