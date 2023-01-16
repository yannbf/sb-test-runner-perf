import { render, screen } from "@testing-library/react";
import { TaskList } from "./TaskList";
import { within } from '@testing-library/dom';

describe("Task List", () => {
  [{
    groupName: "Unicode - Japanese-style punctuation",
    start: 0x3001,
    end: 0x303f
  }, {
    groupName: "Unicode - Hiragana",
    start: 0x3040,
    end: 0x309f,
  }, 
  {
    groupName: "Unicode - Katakana",
    start: 0x30a0,
    end: 0x30ff,
  }, 
  {
    groupName: "Unicode - Common and uncommon kanji",
    start: 0x4e00,
    end: 0x50ff,
  }].forEach(({ groupName, start, end }) => {
    describe(groupName, () => {
      for (let i = start; i < end; i++) {
        const unicodeChar = String.fromCharCode(i);
  
        test(`Unicode test - ${unicodeChar}`, () => {
          const tasks = [unicodeChar];
          render(<TaskList tasks={tasks}></TaskList>);
  
          const taskList = screen.getByTestId("task-list");
          within(taskList).getByText(`0 ${unicodeChar}`);
        });
      }
    })
  })
});
