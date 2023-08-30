import { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { TaskList } from './TaskList';

const meta = {
    title: 'Example/TaskList',
    component: TaskList,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
} as Meta<typeof TaskList>

export default meta;

type Story = StoryObj<typeof meta>;

export const testCase0: Story = {
  args: {
    tasks: ["、"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 、`)
    ).toBeInTheDocument();
  }
}
export const testCase1: Story = {
  args: {
    tasks: ["。"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 。`)
    ).toBeInTheDocument();
  }
}
export const testCase2: Story = {
  args: {
    tasks: ["〃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〃`)
    ).toBeInTheDocument();
  }
}
export const testCase3: Story = {
  args: {
    tasks: ["〄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〄`)
    ).toBeInTheDocument();
  }
}
export const testCase4: Story = {
  args: {
    tasks: ["々"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 々`)
    ).toBeInTheDocument();
  }
}
export const testCase5: Story = {
  args: {
    tasks: ["〆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〆`)
    ).toBeInTheDocument();
  }
}
export const testCase6: Story = {
  args: {
    tasks: ["〇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〇`)
    ).toBeInTheDocument();
  }
}
export const testCase7: Story = {
  args: {
    tasks: ["〈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〈`)
    ).toBeInTheDocument();
  }
}
export const testCase8: Story = {
  args: {
    tasks: ["〉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〉`)
    ).toBeInTheDocument();
  }
}
export const testCase9: Story = {
  args: {
    tasks: ["《"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 《`)
    ).toBeInTheDocument();
  }
}
export const testCase10: Story = {
  args: {
    tasks: ["》"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 》`)
    ).toBeInTheDocument();
  }
}
export const testCase11: Story = {
  args: {
    tasks: ["「"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 「`)
    ).toBeInTheDocument();
  }
}
export const testCase12: Story = {
  args: {
    tasks: ["」"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 」`)
    ).toBeInTheDocument();
  }
}
export const testCase13: Story = {
  args: {
    tasks: ["『"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 『`)
    ).toBeInTheDocument();
  }
}
export const testCase14: Story = {
  args: {
    tasks: ["』"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 』`)
    ).toBeInTheDocument();
  }
}
export const testCase15: Story = {
  args: {
    tasks: ["【"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 【`)
    ).toBeInTheDocument();
  }
}
export const testCase16: Story = {
  args: {
    tasks: ["】"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 】`)
    ).toBeInTheDocument();
  }
}
export const testCase17: Story = {
  args: {
    tasks: ["〒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〒`)
    ).toBeInTheDocument();
  }
}
export const testCase18: Story = {
  args: {
    tasks: ["〓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〓`)
    ).toBeInTheDocument();
  }
}
export const testCase19: Story = {
  args: {
    tasks: ["〔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〔`)
    ).toBeInTheDocument();
  }
}
export const testCase20: Story = {
  args: {
    tasks: ["〕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〕`)
    ).toBeInTheDocument();
  }
}
export const testCase21: Story = {
  args: {
    tasks: ["〖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〖`)
    ).toBeInTheDocument();
  }
}
export const testCase22: Story = {
  args: {
    tasks: ["〗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〗`)
    ).toBeInTheDocument();
  }
}
export const testCase23: Story = {
  args: {
    tasks: ["〘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〘`)
    ).toBeInTheDocument();
  }
}
export const testCase24: Story = {
  args: {
    tasks: ["〙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〙`)
    ).toBeInTheDocument();
  }
}
export const testCase25: Story = {
  args: {
    tasks: ["〚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〚`)
    ).toBeInTheDocument();
  }
}
export const testCase26: Story = {
  args: {
    tasks: ["〛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〛`)
    ).toBeInTheDocument();
  }
}
export const testCase27: Story = {
  args: {
    tasks: ["〜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〜`)
    ).toBeInTheDocument();
  }
}
export const testCase28: Story = {
  args: {
    tasks: ["〝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〝`)
    ).toBeInTheDocument();
  }
}
export const testCase29: Story = {
  args: {
    tasks: ["〞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〞`)
    ).toBeInTheDocument();
  }
}
export const testCase30: Story = {
  args: {
    tasks: ["〟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〟`)
    ).toBeInTheDocument();
  }
}
export const testCase31: Story = {
  args: {
    tasks: ["〠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〠`)
    ).toBeInTheDocument();
  }
}
export const testCase32: Story = {
  args: {
    tasks: ["〡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〡`)
    ).toBeInTheDocument();
  }
}
export const testCase33: Story = {
  args: {
    tasks: ["〢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〢`)
    ).toBeInTheDocument();
  }
}
export const testCase34: Story = {
  args: {
    tasks: ["〣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〣`)
    ).toBeInTheDocument();
  }
}
export const testCase35: Story = {
  args: {
    tasks: ["〤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〤`)
    ).toBeInTheDocument();
  }
}
export const testCase36: Story = {
  args: {
    tasks: ["〥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〥`)
    ).toBeInTheDocument();
  }
}
export const testCase37: Story = {
  args: {
    tasks: ["〦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〦`)
    ).toBeInTheDocument();
  }
}
export const testCase38: Story = {
  args: {
    tasks: ["〧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〧`)
    ).toBeInTheDocument();
  }
}
export const testCase39: Story = {
  args: {
    tasks: ["〨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〨`)
    ).toBeInTheDocument();
  }
}
export const testCase40: Story = {
  args: {
    tasks: ["〩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〩`)
    ).toBeInTheDocument();
  }
}
export const testCase41: Story = {
  args: {
    tasks: ["〪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〪`)
    ).toBeInTheDocument();
  }
}
export const testCase42: Story = {
  args: {
    tasks: ["〫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〫`)
    ).toBeInTheDocument();
  }
}
export const testCase43: Story = {
  args: {
    tasks: ["〬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〬`)
    ).toBeInTheDocument();
  }
}
export const testCase44: Story = {
  args: {
    tasks: ["〭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〭`)
    ).toBeInTheDocument();
  }
}
export const testCase45: Story = {
  args: {
    tasks: ["〮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〮`)
    ).toBeInTheDocument();
  }
}
export const testCase46: Story = {
  args: {
    tasks: ["〯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〯`)
    ).toBeInTheDocument();
  }
}
export const testCase47: Story = {
  args: {
    tasks: ["〰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〰`)
    ).toBeInTheDocument();
  }
}
export const testCase48: Story = {
  args: {
    tasks: ["〱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〱`)
    ).toBeInTheDocument();
  }
}
export const testCase49: Story = {
  args: {
    tasks: ["〲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〲`)
    ).toBeInTheDocument();
  }
}
export const testCase50: Story = {
  args: {
    tasks: ["〳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〳`)
    ).toBeInTheDocument();
  }
}
export const testCase51: Story = {
  args: {
    tasks: ["〴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〴`)
    ).toBeInTheDocument();
  }
}
export const testCase52: Story = {
  args: {
    tasks: ["〵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〵`)
    ).toBeInTheDocument();
  }
}
export const testCase53: Story = {
  args: {
    tasks: ["〶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〶`)
    ).toBeInTheDocument();
  }
}
export const testCase54: Story = {
  args: {
    tasks: ["〷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〷`)
    ).toBeInTheDocument();
  }
}
export const testCase55: Story = {
  args: {
    tasks: ["〸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〸`)
    ).toBeInTheDocument();
  }
}
export const testCase56: Story = {
  args: {
    tasks: ["〹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〹`)
    ).toBeInTheDocument();
  }
}
export const testCase57: Story = {
  args: {
    tasks: ["〺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〺`)
    ).toBeInTheDocument();
  }
}
export const testCase58: Story = {
  args: {
    tasks: ["〻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〻`)
    ).toBeInTheDocument();
  }
}
export const testCase59: Story = {
  args: {
    tasks: ["〼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〼`)
    ).toBeInTheDocument();
  }
}
export const testCase60: Story = {
  args: {
    tasks: ["〽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〽`)
    ).toBeInTheDocument();
  }
}
export const testCase61: Story = {
  args: {
    tasks: ["〾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 〾`)
    ).toBeInTheDocument();
  }
}
export const testCase62: Story = {
  args: {
    tasks: ["぀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぀`)
    ).toBeInTheDocument();
  }
}
export const testCase63: Story = {
  args: {
    tasks: ["ぁ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぁ`)
    ).toBeInTheDocument();
  }
}
export const testCase64: Story = {
  args: {
    tasks: ["あ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 あ`)
    ).toBeInTheDocument();
  }
}
export const testCase65: Story = {
  args: {
    tasks: ["ぃ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぃ`)
    ).toBeInTheDocument();
  }
}
export const testCase66: Story = {
  args: {
    tasks: ["い"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 い`)
    ).toBeInTheDocument();
  }
}
export const testCase67: Story = {
  args: {
    tasks: ["ぅ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぅ`)
    ).toBeInTheDocument();
  }
}
export const testCase68: Story = {
  args: {
    tasks: ["う"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 う`)
    ).toBeInTheDocument();
  }
}
export const testCase69: Story = {
  args: {
    tasks: ["ぇ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぇ`)
    ).toBeInTheDocument();
  }
}
export const testCase70: Story = {
  args: {
    tasks: ["え"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 え`)
    ).toBeInTheDocument();
  }
}
export const testCase71: Story = {
  args: {
    tasks: ["ぉ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぉ`)
    ).toBeInTheDocument();
  }
}
export const testCase72: Story = {
  args: {
    tasks: ["お"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 お`)
    ).toBeInTheDocument();
  }
}
export const testCase73: Story = {
  args: {
    tasks: ["か"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 か`)
    ).toBeInTheDocument();
  }
}
export const testCase74: Story = {
  args: {
    tasks: ["が"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 が`)
    ).toBeInTheDocument();
  }
}
export const testCase75: Story = {
  args: {
    tasks: ["き"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 き`)
    ).toBeInTheDocument();
  }
}
export const testCase76: Story = {
  args: {
    tasks: ["ぎ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぎ`)
    ).toBeInTheDocument();
  }
}
export const testCase77: Story = {
  args: {
    tasks: ["く"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 く`)
    ).toBeInTheDocument();
  }
}
export const testCase78: Story = {
  args: {
    tasks: ["ぐ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぐ`)
    ).toBeInTheDocument();
  }
}
export const testCase79: Story = {
  args: {
    tasks: ["け"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 け`)
    ).toBeInTheDocument();
  }
}
export const testCase80: Story = {
  args: {
    tasks: ["げ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 げ`)
    ).toBeInTheDocument();
  }
}
export const testCase81: Story = {
  args: {
    tasks: ["こ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 こ`)
    ).toBeInTheDocument();
  }
}
export const testCase82: Story = {
  args: {
    tasks: ["ご"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ご`)
    ).toBeInTheDocument();
  }
}
export const testCase83: Story = {
  args: {
    tasks: ["さ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 さ`)
    ).toBeInTheDocument();
  }
}
export const testCase84: Story = {
  args: {
    tasks: ["ざ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ざ`)
    ).toBeInTheDocument();
  }
}
export const testCase85: Story = {
  args: {
    tasks: ["し"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 し`)
    ).toBeInTheDocument();
  }
}
export const testCase86: Story = {
  args: {
    tasks: ["じ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 じ`)
    ).toBeInTheDocument();
  }
}
export const testCase87: Story = {
  args: {
    tasks: ["す"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 す`)
    ).toBeInTheDocument();
  }
}
export const testCase88: Story = {
  args: {
    tasks: ["ず"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ず`)
    ).toBeInTheDocument();
  }
}
export const testCase89: Story = {
  args: {
    tasks: ["せ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 せ`)
    ).toBeInTheDocument();
  }
}
export const testCase90: Story = {
  args: {
    tasks: ["ぜ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぜ`)
    ).toBeInTheDocument();
  }
}
export const testCase91: Story = {
  args: {
    tasks: ["そ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 そ`)
    ).toBeInTheDocument();
  }
}
export const testCase92: Story = {
  args: {
    tasks: ["ぞ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぞ`)
    ).toBeInTheDocument();
  }
}
export const testCase93: Story = {
  args: {
    tasks: ["た"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 た`)
    ).toBeInTheDocument();
  }
}
export const testCase94: Story = {
  args: {
    tasks: ["だ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 だ`)
    ).toBeInTheDocument();
  }
}
export const testCase95: Story = {
  args: {
    tasks: ["ち"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ち`)
    ).toBeInTheDocument();
  }
}
export const testCase96: Story = {
  args: {
    tasks: ["ぢ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぢ`)
    ).toBeInTheDocument();
  }
}
export const testCase97: Story = {
  args: {
    tasks: ["っ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 っ`)
    ).toBeInTheDocument();
  }
}
export const testCase98: Story = {
  args: {
    tasks: ["つ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 つ`)
    ).toBeInTheDocument();
  }
}
export const testCase99: Story = {
  args: {
    tasks: ["づ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 づ`)
    ).toBeInTheDocument();
  }
}
export const testCase100: Story = {
  args: {
    tasks: ["て"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 て`)
    ).toBeInTheDocument();
  }
}
export const testCase101: Story = {
  args: {
    tasks: ["で"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 で`)
    ).toBeInTheDocument();
  }
}
export const testCase102: Story = {
  args: {
    tasks: ["と"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 と`)
    ).toBeInTheDocument();
  }
}
export const testCase103: Story = {
  args: {
    tasks: ["ど"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ど`)
    ).toBeInTheDocument();
  }
}
export const testCase104: Story = {
  args: {
    tasks: ["な"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 な`)
    ).toBeInTheDocument();
  }
}
export const testCase105: Story = {
  args: {
    tasks: ["に"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 に`)
    ).toBeInTheDocument();
  }
}
export const testCase106: Story = {
  args: {
    tasks: ["ぬ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぬ`)
    ).toBeInTheDocument();
  }
}
export const testCase107: Story = {
  args: {
    tasks: ["ね"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ね`)
    ).toBeInTheDocument();
  }
}
export const testCase108: Story = {
  args: {
    tasks: ["の"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 の`)
    ).toBeInTheDocument();
  }
}
export const testCase109: Story = {
  args: {
    tasks: ["は"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 は`)
    ).toBeInTheDocument();
  }
}
export const testCase110: Story = {
  args: {
    tasks: ["ば"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ば`)
    ).toBeInTheDocument();
  }
}
export const testCase111: Story = {
  args: {
    tasks: ["ぱ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぱ`)
    ).toBeInTheDocument();
  }
}
export const testCase112: Story = {
  args: {
    tasks: ["ひ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ひ`)
    ).toBeInTheDocument();
  }
}
export const testCase113: Story = {
  args: {
    tasks: ["び"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 び`)
    ).toBeInTheDocument();
  }
}
export const testCase114: Story = {
  args: {
    tasks: ["ぴ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぴ`)
    ).toBeInTheDocument();
  }
}
export const testCase115: Story = {
  args: {
    tasks: ["ふ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ふ`)
    ).toBeInTheDocument();
  }
}
export const testCase116: Story = {
  args: {
    tasks: ["ぶ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぶ`)
    ).toBeInTheDocument();
  }
}
export const testCase117: Story = {
  args: {
    tasks: ["ぷ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぷ`)
    ).toBeInTheDocument();
  }
}
export const testCase118: Story = {
  args: {
    tasks: ["へ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 へ`)
    ).toBeInTheDocument();
  }
}
export const testCase119: Story = {
  args: {
    tasks: ["べ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 べ`)
    ).toBeInTheDocument();
  }
}
export const testCase120: Story = {
  args: {
    tasks: ["ぺ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぺ`)
    ).toBeInTheDocument();
  }
}
export const testCase121: Story = {
  args: {
    tasks: ["ほ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ほ`)
    ).toBeInTheDocument();
  }
}
export const testCase122: Story = {
  args: {
    tasks: ["ぼ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぼ`)
    ).toBeInTheDocument();
  }
}
export const testCase123: Story = {
  args: {
    tasks: ["ぽ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ぽ`)
    ).toBeInTheDocument();
  }
}
export const testCase124: Story = {
  args: {
    tasks: ["ま"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ま`)
    ).toBeInTheDocument();
  }
}
export const testCase125: Story = {
  args: {
    tasks: ["み"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 み`)
    ).toBeInTheDocument();
  }
}
export const testCase126: Story = {
  args: {
    tasks: ["む"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 む`)
    ).toBeInTheDocument();
  }
}
export const testCase127: Story = {
  args: {
    tasks: ["め"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 め`)
    ).toBeInTheDocument();
  }
}
export const testCase128: Story = {
  args: {
    tasks: ["も"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 も`)
    ).toBeInTheDocument();
  }
}
export const testCase129: Story = {
  args: {
    tasks: ["ゃ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゃ`)
    ).toBeInTheDocument();
  }
}
export const testCase130: Story = {
  args: {
    tasks: ["や"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 や`)
    ).toBeInTheDocument();
  }
}
export const testCase131: Story = {
  args: {
    tasks: ["ゅ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゅ`)
    ).toBeInTheDocument();
  }
}
export const testCase132: Story = {
  args: {
    tasks: ["ゆ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゆ`)
    ).toBeInTheDocument();
  }
}
export const testCase133: Story = {
  args: {
    tasks: ["ょ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ょ`)
    ).toBeInTheDocument();
  }
}
export const testCase134: Story = {
  args: {
    tasks: ["よ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 よ`)
    ).toBeInTheDocument();
  }
}
export const testCase135: Story = {
  args: {
    tasks: ["ら"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ら`)
    ).toBeInTheDocument();
  }
}
export const testCase136: Story = {
  args: {
    tasks: ["り"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 り`)
    ).toBeInTheDocument();
  }
}
export const testCase137: Story = {
  args: {
    tasks: ["る"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 る`)
    ).toBeInTheDocument();
  }
}
export const testCase138: Story = {
  args: {
    tasks: ["れ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 れ`)
    ).toBeInTheDocument();
  }
}
export const testCase139: Story = {
  args: {
    tasks: ["ろ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ろ`)
    ).toBeInTheDocument();
  }
}
export const testCase140: Story = {
  args: {
    tasks: ["ゎ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゎ`)
    ).toBeInTheDocument();
  }
}
export const testCase141: Story = {
  args: {
    tasks: ["わ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 わ`)
    ).toBeInTheDocument();
  }
}
export const testCase142: Story = {
  args: {
    tasks: ["ゐ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゐ`)
    ).toBeInTheDocument();
  }
}
export const testCase143: Story = {
  args: {
    tasks: ["ゑ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゑ`)
    ).toBeInTheDocument();
  }
}
export const testCase144: Story = {
  args: {
    tasks: ["を"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 を`)
    ).toBeInTheDocument();
  }
}
export const testCase145: Story = {
  args: {
    tasks: ["ん"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ん`)
    ).toBeInTheDocument();
  }
}
export const testCase146: Story = {
  args: {
    tasks: ["ゔ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゔ`)
    ).toBeInTheDocument();
  }
}
export const testCase147: Story = {
  args: {
    tasks: ["ゕ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゕ`)
    ).toBeInTheDocument();
  }
}
export const testCase148: Story = {
  args: {
    tasks: ["ゖ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゖ`)
    ).toBeInTheDocument();
  }
}
export const testCase149: Story = {
  args: {
    tasks: ["゗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゗`)
    ).toBeInTheDocument();
  }
}
export const testCase150: Story = {
  args: {
    tasks: ["゘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゘`)
    ).toBeInTheDocument();
  }
}
export const testCase151: Story = {
  args: {
    tasks: ["゙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゙`)
    ).toBeInTheDocument();
  }
}
export const testCase152: Story = {
  args: {
    tasks: ["゚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゚`)
    ).toBeInTheDocument();
  }
}
export const testCase153: Story = {
  args: {
    tasks: ["゛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゛`)
    ).toBeInTheDocument();
  }
}
export const testCase154: Story = {
  args: {
    tasks: ["゜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゜`)
    ).toBeInTheDocument();
  }
}
export const testCase155: Story = {
  args: {
    tasks: ["ゝ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゝ`)
    ).toBeInTheDocument();
  }
}
export const testCase156: Story = {
  args: {
    tasks: ["ゞ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゞ`)
    ).toBeInTheDocument();
  }
}
export const testCase157: Story = {
  args: {
    tasks: ["゠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゠`)
    ).toBeInTheDocument();
  }
}
export const testCase158: Story = {
  args: {
    tasks: ["ァ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ァ`)
    ).toBeInTheDocument();
  }
}
export const testCase159: Story = {
  args: {
    tasks: ["ア"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ア`)
    ).toBeInTheDocument();
  }
}
export const testCase160: Story = {
  args: {
    tasks: ["ィ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ィ`)
    ).toBeInTheDocument();
  }
}
export const testCase161: Story = {
  args: {
    tasks: ["イ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 イ`)
    ).toBeInTheDocument();
  }
}
export const testCase162: Story = {
  args: {
    tasks: ["ゥ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゥ`)
    ).toBeInTheDocument();
  }
}
export const testCase163: Story = {
  args: {
    tasks: ["ウ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ウ`)
    ).toBeInTheDocument();
  }
}
export const testCase164: Story = {
  args: {
    tasks: ["ェ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ェ`)
    ).toBeInTheDocument();
  }
}
export const testCase165: Story = {
  args: {
    tasks: ["エ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 エ`)
    ).toBeInTheDocument();
  }
}
export const testCase166: Story = {
  args: {
    tasks: ["ォ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ォ`)
    ).toBeInTheDocument();
  }
}
export const testCase167: Story = {
  args: {
    tasks: ["オ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 オ`)
    ).toBeInTheDocument();
  }
}
export const testCase168: Story = {
  args: {
    tasks: ["カ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 カ`)
    ).toBeInTheDocument();
  }
}
export const testCase169: Story = {
  args: {
    tasks: ["ガ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ガ`)
    ).toBeInTheDocument();
  }
}
export const testCase170: Story = {
  args: {
    tasks: ["キ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 キ`)
    ).toBeInTheDocument();
  }
}
export const testCase171: Story = {
  args: {
    tasks: ["ギ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ギ`)
    ).toBeInTheDocument();
  }
}
export const testCase172: Story = {
  args: {
    tasks: ["ク"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ク`)
    ).toBeInTheDocument();
  }
}
export const testCase173: Story = {
  args: {
    tasks: ["グ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 グ`)
    ).toBeInTheDocument();
  }
}
export const testCase174: Story = {
  args: {
    tasks: ["ケ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ケ`)
    ).toBeInTheDocument();
  }
}
export const testCase175: Story = {
  args: {
    tasks: ["ゲ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゲ`)
    ).toBeInTheDocument();
  }
}
export const testCase176: Story = {
  args: {
    tasks: ["コ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 コ`)
    ).toBeInTheDocument();
  }
}
export const testCase177: Story = {
  args: {
    tasks: ["ゴ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゴ`)
    ).toBeInTheDocument();
  }
}
export const testCase178: Story = {
  args: {
    tasks: ["サ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 サ`)
    ).toBeInTheDocument();
  }
}
export const testCase179: Story = {
  args: {
    tasks: ["ザ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ザ`)
    ).toBeInTheDocument();
  }
}
export const testCase180: Story = {
  args: {
    tasks: ["シ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 シ`)
    ).toBeInTheDocument();
  }
}
export const testCase181: Story = {
  args: {
    tasks: ["ジ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ジ`)
    ).toBeInTheDocument();
  }
}
export const testCase182: Story = {
  args: {
    tasks: ["ス"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ス`)
    ).toBeInTheDocument();
  }
}
export const testCase183: Story = {
  args: {
    tasks: ["ズ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ズ`)
    ).toBeInTheDocument();
  }
}
export const testCase184: Story = {
  args: {
    tasks: ["セ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 セ`)
    ).toBeInTheDocument();
  }
}
export const testCase185: Story = {
  args: {
    tasks: ["ゼ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゼ`)
    ).toBeInTheDocument();
  }
}
export const testCase186: Story = {
  args: {
    tasks: ["ソ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ソ`)
    ).toBeInTheDocument();
  }
}
export const testCase187: Story = {
  args: {
    tasks: ["ゾ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ゾ`)
    ).toBeInTheDocument();
  }
}
export const testCase188: Story = {
  args: {
    tasks: ["タ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 タ`)
    ).toBeInTheDocument();
  }
}
export const testCase189: Story = {
  args: {
    tasks: ["ダ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ダ`)
    ).toBeInTheDocument();
  }
}
export const testCase190: Story = {
  args: {
    tasks: ["チ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 チ`)
    ).toBeInTheDocument();
  }
}
export const testCase191: Story = {
  args: {
    tasks: ["ヂ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヂ`)
    ).toBeInTheDocument();
  }
}
export const testCase192: Story = {
  args: {
    tasks: ["ッ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ッ`)
    ).toBeInTheDocument();
  }
}
export const testCase193: Story = {
  args: {
    tasks: ["ツ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ツ`)
    ).toBeInTheDocument();
  }
}
export const testCase194: Story = {
  args: {
    tasks: ["ヅ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヅ`)
    ).toBeInTheDocument();
  }
}
export const testCase195: Story = {
  args: {
    tasks: ["テ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 テ`)
    ).toBeInTheDocument();
  }
}
export const testCase196: Story = {
  args: {
    tasks: ["デ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 デ`)
    ).toBeInTheDocument();
  }
}
export const testCase197: Story = {
  args: {
    tasks: ["ト"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ト`)
    ).toBeInTheDocument();
  }
}
export const testCase198: Story = {
  args: {
    tasks: ["ド"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ド`)
    ).toBeInTheDocument();
  }
}
export const testCase199: Story = {
  args: {
    tasks: ["ナ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ナ`)
    ).toBeInTheDocument();
  }
}
export const testCase200: Story = {
  args: {
    tasks: ["ニ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ニ`)
    ).toBeInTheDocument();
  }
}
export const testCase201: Story = {
  args: {
    tasks: ["ヌ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヌ`)
    ).toBeInTheDocument();
  }
}
export const testCase202: Story = {
  args: {
    tasks: ["ネ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ネ`)
    ).toBeInTheDocument();
  }
}
export const testCase203: Story = {
  args: {
    tasks: ["ノ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ノ`)
    ).toBeInTheDocument();
  }
}
export const testCase204: Story = {
  args: {
    tasks: ["ハ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ハ`)
    ).toBeInTheDocument();
  }
}
export const testCase205: Story = {
  args: {
    tasks: ["バ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 バ`)
    ).toBeInTheDocument();
  }
}
export const testCase206: Story = {
  args: {
    tasks: ["パ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 パ`)
    ).toBeInTheDocument();
  }
}
export const testCase207: Story = {
  args: {
    tasks: ["ヒ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヒ`)
    ).toBeInTheDocument();
  }
}
export const testCase208: Story = {
  args: {
    tasks: ["ビ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ビ`)
    ).toBeInTheDocument();
  }
}
export const testCase209: Story = {
  args: {
    tasks: ["ピ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ピ`)
    ).toBeInTheDocument();
  }
}
export const testCase210: Story = {
  args: {
    tasks: ["フ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 フ`)
    ).toBeInTheDocument();
  }
}
export const testCase211: Story = {
  args: {
    tasks: ["ブ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ブ`)
    ).toBeInTheDocument();
  }
}
export const testCase212: Story = {
  args: {
    tasks: ["プ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 プ`)
    ).toBeInTheDocument();
  }
}
export const testCase213: Story = {
  args: {
    tasks: ["ヘ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヘ`)
    ).toBeInTheDocument();
  }
}
export const testCase214: Story = {
  args: {
    tasks: ["ベ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ベ`)
    ).toBeInTheDocument();
  }
}
export const testCase215: Story = {
  args: {
    tasks: ["ペ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ペ`)
    ).toBeInTheDocument();
  }
}
export const testCase216: Story = {
  args: {
    tasks: ["ホ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ホ`)
    ).toBeInTheDocument();
  }
}
export const testCase217: Story = {
  args: {
    tasks: ["ボ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ボ`)
    ).toBeInTheDocument();
  }
}
export const testCase218: Story = {
  args: {
    tasks: ["ポ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ポ`)
    ).toBeInTheDocument();
  }
}
export const testCase219: Story = {
  args: {
    tasks: ["マ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 マ`)
    ).toBeInTheDocument();
  }
}
export const testCase220: Story = {
  args: {
    tasks: ["ミ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ミ`)
    ).toBeInTheDocument();
  }
}
export const testCase221: Story = {
  args: {
    tasks: ["ム"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ム`)
    ).toBeInTheDocument();
  }
}
export const testCase222: Story = {
  args: {
    tasks: ["メ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 メ`)
    ).toBeInTheDocument();
  }
}
export const testCase223: Story = {
  args: {
    tasks: ["モ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 モ`)
    ).toBeInTheDocument();
  }
}
export const testCase224: Story = {
  args: {
    tasks: ["ャ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ャ`)
    ).toBeInTheDocument();
  }
}
export const testCase225: Story = {
  args: {
    tasks: ["ヤ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヤ`)
    ).toBeInTheDocument();
  }
}
export const testCase226: Story = {
  args: {
    tasks: ["ュ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ュ`)
    ).toBeInTheDocument();
  }
}
export const testCase227: Story = {
  args: {
    tasks: ["ユ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ユ`)
    ).toBeInTheDocument();
  }
}
export const testCase228: Story = {
  args: {
    tasks: ["ョ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ョ`)
    ).toBeInTheDocument();
  }
}
export const testCase229: Story = {
  args: {
    tasks: ["ヨ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヨ`)
    ).toBeInTheDocument();
  }
}
export const testCase230: Story = {
  args: {
    tasks: ["ラ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ラ`)
    ).toBeInTheDocument();
  }
}
export const testCase231: Story = {
  args: {
    tasks: ["リ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 リ`)
    ).toBeInTheDocument();
  }
}
export const testCase232: Story = {
  args: {
    tasks: ["ル"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ル`)
    ).toBeInTheDocument();
  }
}
export const testCase233: Story = {
  args: {
    tasks: ["レ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 レ`)
    ).toBeInTheDocument();
  }
}
export const testCase234: Story = {
  args: {
    tasks: ["ロ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ロ`)
    ).toBeInTheDocument();
  }
}
export const testCase235: Story = {
  args: {
    tasks: ["ヮ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヮ`)
    ).toBeInTheDocument();
  }
}
export const testCase236: Story = {
  args: {
    tasks: ["ワ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ワ`)
    ).toBeInTheDocument();
  }
}
export const testCase237: Story = {
  args: {
    tasks: ["ヰ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヰ`)
    ).toBeInTheDocument();
  }
}
export const testCase238: Story = {
  args: {
    tasks: ["ヱ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヱ`)
    ).toBeInTheDocument();
  }
}
export const testCase239: Story = {
  args: {
    tasks: ["ヲ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヲ`)
    ).toBeInTheDocument();
  }
}
export const testCase240: Story = {
  args: {
    tasks: ["ン"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ン`)
    ).toBeInTheDocument();
  }
}
export const testCase241: Story = {
  args: {
    tasks: ["ヴ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヴ`)
    ).toBeInTheDocument();
  }
}
export const testCase242: Story = {
  args: {
    tasks: ["ヵ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヵ`)
    ).toBeInTheDocument();
  }
}
export const testCase243: Story = {
  args: {
    tasks: ["ヶ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヶ`)
    ).toBeInTheDocument();
  }
}
export const testCase244: Story = {
  args: {
    tasks: ["ヷ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヷ`)
    ).toBeInTheDocument();
  }
}
export const testCase245: Story = {
  args: {
    tasks: ["ヸ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヸ`)
    ).toBeInTheDocument();
  }
}
export const testCase246: Story = {
  args: {
    tasks: ["ヹ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヹ`)
    ).toBeInTheDocument();
  }
}
export const testCase247: Story = {
  args: {
    tasks: ["ヺ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヺ`)
    ).toBeInTheDocument();
  }
}
export const testCase248: Story = {
  args: {
    tasks: ["・"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ・`)
    ).toBeInTheDocument();
  }
}
export const testCase249: Story = {
  args: {
    tasks: ["ー"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ー`)
    ).toBeInTheDocument();
  }
}
export const testCase250: Story = {
  args: {
    tasks: ["ヽ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヽ`)
    ).toBeInTheDocument();
  }
}
export const testCase251: Story = {
  args: {
    tasks: ["ヾ"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 ヾ`)
    ).toBeInTheDocument();
  }
}
export const testCase252: Story = {
  args: {
    tasks: ["一"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 一`)
    ).toBeInTheDocument();
  }
}
export const testCase253: Story = {
  args: {
    tasks: ["丁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丁`)
    ).toBeInTheDocument();
  }
}
export const testCase254: Story = {
  args: {
    tasks: ["丂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丂`)
    ).toBeInTheDocument();
  }
}
export const testCase255: Story = {
  args: {
    tasks: ["七"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 七`)
    ).toBeInTheDocument();
  }
}
export const testCase256: Story = {
  args: {
    tasks: ["丄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丄`)
    ).toBeInTheDocument();
  }
}
export const testCase257: Story = {
  args: {
    tasks: ["丅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丅`)
    ).toBeInTheDocument();
  }
}
export const testCase258: Story = {
  args: {
    tasks: ["丆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丆`)
    ).toBeInTheDocument();
  }
}
export const testCase259: Story = {
  args: {
    tasks: ["万"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 万`)
    ).toBeInTheDocument();
  }
}
export const testCase260: Story = {
  args: {
    tasks: ["丈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丈`)
    ).toBeInTheDocument();
  }
}
export const testCase261: Story = {
  args: {
    tasks: ["三"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 三`)
    ).toBeInTheDocument();
  }
}
export const testCase262: Story = {
  args: {
    tasks: ["上"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 上`)
    ).toBeInTheDocument();
  }
}
export const testCase263: Story = {
  args: {
    tasks: ["下"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 下`)
    ).toBeInTheDocument();
  }
}
export const testCase264: Story = {
  args: {
    tasks: ["丌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丌`)
    ).toBeInTheDocument();
  }
}
export const testCase265: Story = {
  args: {
    tasks: ["不"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 不`)
    ).toBeInTheDocument();
  }
}
export const testCase266: Story = {
  args: {
    tasks: ["与"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 与`)
    ).toBeInTheDocument();
  }
}
export const testCase267: Story = {
  args: {
    tasks: ["丏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丏`)
    ).toBeInTheDocument();
  }
}
export const testCase268: Story = {
  args: {
    tasks: ["丐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丐`)
    ).toBeInTheDocument();
  }
}
export const testCase269: Story = {
  args: {
    tasks: ["丑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丑`)
    ).toBeInTheDocument();
  }
}
export const testCase270: Story = {
  args: {
    tasks: ["丒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丒`)
    ).toBeInTheDocument();
  }
}
export const testCase271: Story = {
  args: {
    tasks: ["专"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 专`)
    ).toBeInTheDocument();
  }
}
export const testCase272: Story = {
  args: {
    tasks: ["且"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 且`)
    ).toBeInTheDocument();
  }
}
export const testCase273: Story = {
  args: {
    tasks: ["丕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丕`)
    ).toBeInTheDocument();
  }
}
export const testCase274: Story = {
  args: {
    tasks: ["世"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 世`)
    ).toBeInTheDocument();
  }
}
export const testCase275: Story = {
  args: {
    tasks: ["丗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丗`)
    ).toBeInTheDocument();
  }
}
export const testCase276: Story = {
  args: {
    tasks: ["丘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丘`)
    ).toBeInTheDocument();
  }
}
export const testCase277: Story = {
  args: {
    tasks: ["丙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丙`)
    ).toBeInTheDocument();
  }
}
export const testCase278: Story = {
  args: {
    tasks: ["业"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 业`)
    ).toBeInTheDocument();
  }
}
export const testCase279: Story = {
  args: {
    tasks: ["丛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丛`)
    ).toBeInTheDocument();
  }
}
export const testCase280: Story = {
  args: {
    tasks: ["东"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 东`)
    ).toBeInTheDocument();
  }
}
export const testCase281: Story = {
  args: {
    tasks: ["丝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丝`)
    ).toBeInTheDocument();
  }
}
export const testCase282: Story = {
  args: {
    tasks: ["丞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丞`)
    ).toBeInTheDocument();
  }
}
export const testCase283: Story = {
  args: {
    tasks: ["丟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丟`)
    ).toBeInTheDocument();
  }
}
export const testCase284: Story = {
  args: {
    tasks: ["丠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丠`)
    ).toBeInTheDocument();
  }
}
export const testCase285: Story = {
  args: {
    tasks: ["両"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 両`)
    ).toBeInTheDocument();
  }
}
export const testCase286: Story = {
  args: {
    tasks: ["丢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丢`)
    ).toBeInTheDocument();
  }
}
export const testCase287: Story = {
  args: {
    tasks: ["丣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丣`)
    ).toBeInTheDocument();
  }
}
export const testCase288: Story = {
  args: {
    tasks: ["两"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 两`)
    ).toBeInTheDocument();
  }
}
export const testCase289: Story = {
  args: {
    tasks: ["严"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 严`)
    ).toBeInTheDocument();
  }
}
export const testCase290: Story = {
  args: {
    tasks: ["並"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 並`)
    ).toBeInTheDocument();
  }
}
export const testCase291: Story = {
  args: {
    tasks: ["丧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丧`)
    ).toBeInTheDocument();
  }
}
export const testCase292: Story = {
  args: {
    tasks: ["丨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丨`)
    ).toBeInTheDocument();
  }
}
export const testCase293: Story = {
  args: {
    tasks: ["丩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丩`)
    ).toBeInTheDocument();
  }
}
export const testCase294: Story = {
  args: {
    tasks: ["个"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 个`)
    ).toBeInTheDocument();
  }
}
export const testCase295: Story = {
  args: {
    tasks: ["丫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丫`)
    ).toBeInTheDocument();
  }
}
export const testCase296: Story = {
  args: {
    tasks: ["丬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丬`)
    ).toBeInTheDocument();
  }
}
export const testCase297: Story = {
  args: {
    tasks: ["中"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 中`)
    ).toBeInTheDocument();
  }
}
export const testCase298: Story = {
  args: {
    tasks: ["丮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丮`)
    ).toBeInTheDocument();
  }
}
export const testCase299: Story = {
  args: {
    tasks: ["丯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丯`)
    ).toBeInTheDocument();
  }
}
export const testCase300: Story = {
  args: {
    tasks: ["丰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丰`)
    ).toBeInTheDocument();
  }
}
export const testCase301: Story = {
  args: {
    tasks: ["丱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丱`)
    ).toBeInTheDocument();
  }
}
export const testCase302: Story = {
  args: {
    tasks: ["串"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 串`)
    ).toBeInTheDocument();
  }
}
export const testCase303: Story = {
  args: {
    tasks: ["丳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丳`)
    ).toBeInTheDocument();
  }
}
export const testCase304: Story = {
  args: {
    tasks: ["临"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 临`)
    ).toBeInTheDocument();
  }
}
export const testCase305: Story = {
  args: {
    tasks: ["丵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丵`)
    ).toBeInTheDocument();
  }
}
export const testCase306: Story = {
  args: {
    tasks: ["丶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丶`)
    ).toBeInTheDocument();
  }
}
export const testCase307: Story = {
  args: {
    tasks: ["丷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丷`)
    ).toBeInTheDocument();
  }
}
export const testCase308: Story = {
  args: {
    tasks: ["丸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丸`)
    ).toBeInTheDocument();
  }
}
export const testCase309: Story = {
  args: {
    tasks: ["丹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丹`)
    ).toBeInTheDocument();
  }
}
export const testCase310: Story = {
  args: {
    tasks: ["为"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 为`)
    ).toBeInTheDocument();
  }
}
export const testCase311: Story = {
  args: {
    tasks: ["主"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 主`)
    ).toBeInTheDocument();
  }
}
export const testCase312: Story = {
  args: {
    tasks: ["丼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丼`)
    ).toBeInTheDocument();
  }
}
export const testCase313: Story = {
  args: {
    tasks: ["丽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丽`)
    ).toBeInTheDocument();
  }
}
export const testCase314: Story = {
  args: {
    tasks: ["举"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 举`)
    ).toBeInTheDocument();
  }
}
export const testCase315: Story = {
  args: {
    tasks: ["丿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 丿`)
    ).toBeInTheDocument();
  }
}
export const testCase316: Story = {
  args: {
    tasks: ["乀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乀`)
    ).toBeInTheDocument();
  }
}
export const testCase317: Story = {
  args: {
    tasks: ["乁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乁`)
    ).toBeInTheDocument();
  }
}
export const testCase318: Story = {
  args: {
    tasks: ["乂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乂`)
    ).toBeInTheDocument();
  }
}
export const testCase319: Story = {
  args: {
    tasks: ["乃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乃`)
    ).toBeInTheDocument();
  }
}
export const testCase320: Story = {
  args: {
    tasks: ["乄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乄`)
    ).toBeInTheDocument();
  }
}
export const testCase321: Story = {
  args: {
    tasks: ["久"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 久`)
    ).toBeInTheDocument();
  }
}
export const testCase322: Story = {
  args: {
    tasks: ["乆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乆`)
    ).toBeInTheDocument();
  }
}
export const testCase323: Story = {
  args: {
    tasks: ["乇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乇`)
    ).toBeInTheDocument();
  }
}
export const testCase324: Story = {
  args: {
    tasks: ["么"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 么`)
    ).toBeInTheDocument();
  }
}
export const testCase325: Story = {
  args: {
    tasks: ["义"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 义`)
    ).toBeInTheDocument();
  }
}
export const testCase326: Story = {
  args: {
    tasks: ["乊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乊`)
    ).toBeInTheDocument();
  }
}
export const testCase327: Story = {
  args: {
    tasks: ["之"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 之`)
    ).toBeInTheDocument();
  }
}
export const testCase328: Story = {
  args: {
    tasks: ["乌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乌`)
    ).toBeInTheDocument();
  }
}
export const testCase329: Story = {
  args: {
    tasks: ["乍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乍`)
    ).toBeInTheDocument();
  }
}
export const testCase330: Story = {
  args: {
    tasks: ["乎"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乎`)
    ).toBeInTheDocument();
  }
}
export const testCase331: Story = {
  args: {
    tasks: ["乏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乏`)
    ).toBeInTheDocument();
  }
}
export const testCase332: Story = {
  args: {
    tasks: ["乐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乐`)
    ).toBeInTheDocument();
  }
}
export const testCase333: Story = {
  args: {
    tasks: ["乑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乑`)
    ).toBeInTheDocument();
  }
}
export const testCase334: Story = {
  args: {
    tasks: ["乒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乒`)
    ).toBeInTheDocument();
  }
}
export const testCase335: Story = {
  args: {
    tasks: ["乓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乓`)
    ).toBeInTheDocument();
  }
}
export const testCase336: Story = {
  args: {
    tasks: ["乔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乔`)
    ).toBeInTheDocument();
  }
}
export const testCase337: Story = {
  args: {
    tasks: ["乕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乕`)
    ).toBeInTheDocument();
  }
}
export const testCase338: Story = {
  args: {
    tasks: ["乖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乖`)
    ).toBeInTheDocument();
  }
}
export const testCase339: Story = {
  args: {
    tasks: ["乗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乗`)
    ).toBeInTheDocument();
  }
}
export const testCase340: Story = {
  args: {
    tasks: ["乘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乘`)
    ).toBeInTheDocument();
  }
}
export const testCase341: Story = {
  args: {
    tasks: ["乙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乙`)
    ).toBeInTheDocument();
  }
}
export const testCase342: Story = {
  args: {
    tasks: ["乚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乚`)
    ).toBeInTheDocument();
  }
}
export const testCase343: Story = {
  args: {
    tasks: ["乛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乛`)
    ).toBeInTheDocument();
  }
}
export const testCase344: Story = {
  args: {
    tasks: ["乜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乜`)
    ).toBeInTheDocument();
  }
}
export const testCase345: Story = {
  args: {
    tasks: ["九"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 九`)
    ).toBeInTheDocument();
  }
}
export const testCase346: Story = {
  args: {
    tasks: ["乞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乞`)
    ).toBeInTheDocument();
  }
}
export const testCase347: Story = {
  args: {
    tasks: ["也"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 也`)
    ).toBeInTheDocument();
  }
}
export const testCase348: Story = {
  args: {
    tasks: ["习"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 习`)
    ).toBeInTheDocument();
  }
}
export const testCase349: Story = {
  args: {
    tasks: ["乡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乡`)
    ).toBeInTheDocument();
  }
}
export const testCase350: Story = {
  args: {
    tasks: ["乢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乢`)
    ).toBeInTheDocument();
  }
}
export const testCase351: Story = {
  args: {
    tasks: ["乣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乣`)
    ).toBeInTheDocument();
  }
}
export const testCase352: Story = {
  args: {
    tasks: ["乤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乤`)
    ).toBeInTheDocument();
  }
}
export const testCase353: Story = {
  args: {
    tasks: ["乥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乥`)
    ).toBeInTheDocument();
  }
}
export const testCase354: Story = {
  args: {
    tasks: ["书"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 书`)
    ).toBeInTheDocument();
  }
}
export const testCase355: Story = {
  args: {
    tasks: ["乧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乧`)
    ).toBeInTheDocument();
  }
}
export const testCase356: Story = {
  args: {
    tasks: ["乨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乨`)
    ).toBeInTheDocument();
  }
}
export const testCase357: Story = {
  args: {
    tasks: ["乩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乩`)
    ).toBeInTheDocument();
  }
}
export const testCase358: Story = {
  args: {
    tasks: ["乪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乪`)
    ).toBeInTheDocument();
  }
}
export const testCase359: Story = {
  args: {
    tasks: ["乫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乫`)
    ).toBeInTheDocument();
  }
}
export const testCase360: Story = {
  args: {
    tasks: ["乬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乬`)
    ).toBeInTheDocument();
  }
}
export const testCase361: Story = {
  args: {
    tasks: ["乭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乭`)
    ).toBeInTheDocument();
  }
}
export const testCase362: Story = {
  args: {
    tasks: ["乮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乮`)
    ).toBeInTheDocument();
  }
}
export const testCase363: Story = {
  args: {
    tasks: ["乯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乯`)
    ).toBeInTheDocument();
  }
}
export const testCase364: Story = {
  args: {
    tasks: ["买"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 买`)
    ).toBeInTheDocument();
  }
}
export const testCase365: Story = {
  args: {
    tasks: ["乱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乱`)
    ).toBeInTheDocument();
  }
}
export const testCase366: Story = {
  args: {
    tasks: ["乲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乲`)
    ).toBeInTheDocument();
  }
}
export const testCase367: Story = {
  args: {
    tasks: ["乳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乳`)
    ).toBeInTheDocument();
  }
}
export const testCase368: Story = {
  args: {
    tasks: ["乴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乴`)
    ).toBeInTheDocument();
  }
}
export const testCase369: Story = {
  args: {
    tasks: ["乵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乵`)
    ).toBeInTheDocument();
  }
}
export const testCase370: Story = {
  args: {
    tasks: ["乶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乶`)
    ).toBeInTheDocument();
  }
}
export const testCase371: Story = {
  args: {
    tasks: ["乷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乷`)
    ).toBeInTheDocument();
  }
}
export const testCase372: Story = {
  args: {
    tasks: ["乸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乸`)
    ).toBeInTheDocument();
  }
}
export const testCase373: Story = {
  args: {
    tasks: ["乹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乹`)
    ).toBeInTheDocument();
  }
}
export const testCase374: Story = {
  args: {
    tasks: ["乺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乺`)
    ).toBeInTheDocument();
  }
}
export const testCase375: Story = {
  args: {
    tasks: ["乻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乻`)
    ).toBeInTheDocument();
  }
}
export const testCase376: Story = {
  args: {
    tasks: ["乼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乼`)
    ).toBeInTheDocument();
  }
}
export const testCase377: Story = {
  args: {
    tasks: ["乽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乽`)
    ).toBeInTheDocument();
  }
}
export const testCase378: Story = {
  args: {
    tasks: ["乾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乾`)
    ).toBeInTheDocument();
  }
}
export const testCase379: Story = {
  args: {
    tasks: ["乿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 乿`)
    ).toBeInTheDocument();
  }
}
export const testCase380: Story = {
  args: {
    tasks: ["亀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亀`)
    ).toBeInTheDocument();
  }
}
export const testCase381: Story = {
  args: {
    tasks: ["亁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亁`)
    ).toBeInTheDocument();
  }
}
export const testCase382: Story = {
  args: {
    tasks: ["亂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亂`)
    ).toBeInTheDocument();
  }
}
export const testCase383: Story = {
  args: {
    tasks: ["亃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亃`)
    ).toBeInTheDocument();
  }
}
export const testCase384: Story = {
  args: {
    tasks: ["亄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亄`)
    ).toBeInTheDocument();
  }
}
export const testCase385: Story = {
  args: {
    tasks: ["亅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亅`)
    ).toBeInTheDocument();
  }
}
export const testCase386: Story = {
  args: {
    tasks: ["了"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 了`)
    ).toBeInTheDocument();
  }
}
export const testCase387: Story = {
  args: {
    tasks: ["亇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亇`)
    ).toBeInTheDocument();
  }
}
export const testCase388: Story = {
  args: {
    tasks: ["予"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 予`)
    ).toBeInTheDocument();
  }
}
export const testCase389: Story = {
  args: {
    tasks: ["争"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 争`)
    ).toBeInTheDocument();
  }
}
export const testCase390: Story = {
  args: {
    tasks: ["亊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亊`)
    ).toBeInTheDocument();
  }
}
export const testCase391: Story = {
  args: {
    tasks: ["事"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 事`)
    ).toBeInTheDocument();
  }
}
export const testCase392: Story = {
  args: {
    tasks: ["二"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 二`)
    ).toBeInTheDocument();
  }
}
export const testCase393: Story = {
  args: {
    tasks: ["亍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亍`)
    ).toBeInTheDocument();
  }
}
export const testCase394: Story = {
  args: {
    tasks: ["于"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 于`)
    ).toBeInTheDocument();
  }
}
export const testCase395: Story = {
  args: {
    tasks: ["亏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亏`)
    ).toBeInTheDocument();
  }
}
export const testCase396: Story = {
  args: {
    tasks: ["亐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亐`)
    ).toBeInTheDocument();
  }
}
export const testCase397: Story = {
  args: {
    tasks: ["云"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 云`)
    ).toBeInTheDocument();
  }
}
export const testCase398: Story = {
  args: {
    tasks: ["互"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 互`)
    ).toBeInTheDocument();
  }
}
export const testCase399: Story = {
  args: {
    tasks: ["亓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亓`)
    ).toBeInTheDocument();
  }
}
export const testCase400: Story = {
  args: {
    tasks: ["五"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 五`)
    ).toBeInTheDocument();
  }
}
export const testCase401: Story = {
  args: {
    tasks: ["井"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 井`)
    ).toBeInTheDocument();
  }
}
export const testCase402: Story = {
  args: {
    tasks: ["亖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亖`)
    ).toBeInTheDocument();
  }
}
export const testCase403: Story = {
  args: {
    tasks: ["亗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亗`)
    ).toBeInTheDocument();
  }
}
export const testCase404: Story = {
  args: {
    tasks: ["亘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亘`)
    ).toBeInTheDocument();
  }
}
export const testCase405: Story = {
  args: {
    tasks: ["亙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亙`)
    ).toBeInTheDocument();
  }
}
export const testCase406: Story = {
  args: {
    tasks: ["亚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亚`)
    ).toBeInTheDocument();
  }
}
export const testCase407: Story = {
  args: {
    tasks: ["些"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 些`)
    ).toBeInTheDocument();
  }
}
export const testCase408: Story = {
  args: {
    tasks: ["亜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亜`)
    ).toBeInTheDocument();
  }
}
export const testCase409: Story = {
  args: {
    tasks: ["亝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亝`)
    ).toBeInTheDocument();
  }
}
export const testCase410: Story = {
  args: {
    tasks: ["亞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亞`)
    ).toBeInTheDocument();
  }
}
export const testCase411: Story = {
  args: {
    tasks: ["亟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亟`)
    ).toBeInTheDocument();
  }
}
export const testCase412: Story = {
  args: {
    tasks: ["亠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亠`)
    ).toBeInTheDocument();
  }
}
export const testCase413: Story = {
  args: {
    tasks: ["亡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亡`)
    ).toBeInTheDocument();
  }
}
export const testCase414: Story = {
  args: {
    tasks: ["亢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亢`)
    ).toBeInTheDocument();
  }
}
export const testCase415: Story = {
  args: {
    tasks: ["亣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亣`)
    ).toBeInTheDocument();
  }
}
export const testCase416: Story = {
  args: {
    tasks: ["交"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 交`)
    ).toBeInTheDocument();
  }
}
export const testCase417: Story = {
  args: {
    tasks: ["亥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亥`)
    ).toBeInTheDocument();
  }
}
export const testCase418: Story = {
  args: {
    tasks: ["亦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亦`)
    ).toBeInTheDocument();
  }
}
export const testCase419: Story = {
  args: {
    tasks: ["产"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 产`)
    ).toBeInTheDocument();
  }
}
export const testCase420: Story = {
  args: {
    tasks: ["亨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亨`)
    ).toBeInTheDocument();
  }
}
export const testCase421: Story = {
  args: {
    tasks: ["亩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亩`)
    ).toBeInTheDocument();
  }
}
export const testCase422: Story = {
  args: {
    tasks: ["亪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亪`)
    ).toBeInTheDocument();
  }
}
export const testCase423: Story = {
  args: {
    tasks: ["享"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 享`)
    ).toBeInTheDocument();
  }
}
export const testCase424: Story = {
  args: {
    tasks: ["京"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 京`)
    ).toBeInTheDocument();
  }
}
export const testCase425: Story = {
  args: {
    tasks: ["亭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亭`)
    ).toBeInTheDocument();
  }
}
export const testCase426: Story = {
  args: {
    tasks: ["亮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亮`)
    ).toBeInTheDocument();
  }
}
export const testCase427: Story = {
  args: {
    tasks: ["亯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亯`)
    ).toBeInTheDocument();
  }
}
export const testCase428: Story = {
  args: {
    tasks: ["亰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亰`)
    ).toBeInTheDocument();
  }
}
export const testCase429: Story = {
  args: {
    tasks: ["亱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亱`)
    ).toBeInTheDocument();
  }
}
export const testCase430: Story = {
  args: {
    tasks: ["亲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亲`)
    ).toBeInTheDocument();
  }
}
export const testCase431: Story = {
  args: {
    tasks: ["亳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亳`)
    ).toBeInTheDocument();
  }
}
export const testCase432: Story = {
  args: {
    tasks: ["亴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亴`)
    ).toBeInTheDocument();
  }
}
export const testCase433: Story = {
  args: {
    tasks: ["亵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亵`)
    ).toBeInTheDocument();
  }
}
export const testCase434: Story = {
  args: {
    tasks: ["亶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亶`)
    ).toBeInTheDocument();
  }
}
export const testCase435: Story = {
  args: {
    tasks: ["亷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亷`)
    ).toBeInTheDocument();
  }
}
export const testCase436: Story = {
  args: {
    tasks: ["亸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亸`)
    ).toBeInTheDocument();
  }
}
export const testCase437: Story = {
  args: {
    tasks: ["亹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亹`)
    ).toBeInTheDocument();
  }
}
export const testCase438: Story = {
  args: {
    tasks: ["人"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 人`)
    ).toBeInTheDocument();
  }
}
export const testCase439: Story = {
  args: {
    tasks: ["亻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亻`)
    ).toBeInTheDocument();
  }
}
export const testCase440: Story = {
  args: {
    tasks: ["亼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亼`)
    ).toBeInTheDocument();
  }
}
export const testCase441: Story = {
  args: {
    tasks: ["亽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亽`)
    ).toBeInTheDocument();
  }
}
export const testCase442: Story = {
  args: {
    tasks: ["亾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亾`)
    ).toBeInTheDocument();
  }
}
export const testCase443: Story = {
  args: {
    tasks: ["亿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 亿`)
    ).toBeInTheDocument();
  }
}
export const testCase444: Story = {
  args: {
    tasks: ["什"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 什`)
    ).toBeInTheDocument();
  }
}
export const testCase445: Story = {
  args: {
    tasks: ["仁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仁`)
    ).toBeInTheDocument();
  }
}
export const testCase446: Story = {
  args: {
    tasks: ["仂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仂`)
    ).toBeInTheDocument();
  }
}
export const testCase447: Story = {
  args: {
    tasks: ["仃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仃`)
    ).toBeInTheDocument();
  }
}
export const testCase448: Story = {
  args: {
    tasks: ["仄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仄`)
    ).toBeInTheDocument();
  }
}
export const testCase449: Story = {
  args: {
    tasks: ["仅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仅`)
    ).toBeInTheDocument();
  }
}
export const testCase450: Story = {
  args: {
    tasks: ["仆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仆`)
    ).toBeInTheDocument();
  }
}
export const testCase451: Story = {
  args: {
    tasks: ["仇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仇`)
    ).toBeInTheDocument();
  }
}
export const testCase452: Story = {
  args: {
    tasks: ["仈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仈`)
    ).toBeInTheDocument();
  }
}
export const testCase453: Story = {
  args: {
    tasks: ["仉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仉`)
    ).toBeInTheDocument();
  }
}
export const testCase454: Story = {
  args: {
    tasks: ["今"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 今`)
    ).toBeInTheDocument();
  }
}
export const testCase455: Story = {
  args: {
    tasks: ["介"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 介`)
    ).toBeInTheDocument();
  }
}
export const testCase456: Story = {
  args: {
    tasks: ["仌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仌`)
    ).toBeInTheDocument();
  }
}
export const testCase457: Story = {
  args: {
    tasks: ["仍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仍`)
    ).toBeInTheDocument();
  }
}
export const testCase458: Story = {
  args: {
    tasks: ["从"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 从`)
    ).toBeInTheDocument();
  }
}
export const testCase459: Story = {
  args: {
    tasks: ["仏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仏`)
    ).toBeInTheDocument();
  }
}
export const testCase460: Story = {
  args: {
    tasks: ["仐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仐`)
    ).toBeInTheDocument();
  }
}
export const testCase461: Story = {
  args: {
    tasks: ["仑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仑`)
    ).toBeInTheDocument();
  }
}
export const testCase462: Story = {
  args: {
    tasks: ["仒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仒`)
    ).toBeInTheDocument();
  }
}
export const testCase463: Story = {
  args: {
    tasks: ["仓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仓`)
    ).toBeInTheDocument();
  }
}
export const testCase464: Story = {
  args: {
    tasks: ["仔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仔`)
    ).toBeInTheDocument();
  }
}
export const testCase465: Story = {
  args: {
    tasks: ["仕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仕`)
    ).toBeInTheDocument();
  }
}
export const testCase466: Story = {
  args: {
    tasks: ["他"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 他`)
    ).toBeInTheDocument();
  }
}
export const testCase467: Story = {
  args: {
    tasks: ["仗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仗`)
    ).toBeInTheDocument();
  }
}
export const testCase468: Story = {
  args: {
    tasks: ["付"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 付`)
    ).toBeInTheDocument();
  }
}
export const testCase469: Story = {
  args: {
    tasks: ["仙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仙`)
    ).toBeInTheDocument();
  }
}
export const testCase470: Story = {
  args: {
    tasks: ["仚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仚`)
    ).toBeInTheDocument();
  }
}
export const testCase471: Story = {
  args: {
    tasks: ["仛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仛`)
    ).toBeInTheDocument();
  }
}
export const testCase472: Story = {
  args: {
    tasks: ["仜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仜`)
    ).toBeInTheDocument();
  }
}
export const testCase473: Story = {
  args: {
    tasks: ["仝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仝`)
    ).toBeInTheDocument();
  }
}
export const testCase474: Story = {
  args: {
    tasks: ["仞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仞`)
    ).toBeInTheDocument();
  }
}
export const testCase475: Story = {
  args: {
    tasks: ["仟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仟`)
    ).toBeInTheDocument();
  }
}
export const testCase476: Story = {
  args: {
    tasks: ["仠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仠`)
    ).toBeInTheDocument();
  }
}
export const testCase477: Story = {
  args: {
    tasks: ["仡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仡`)
    ).toBeInTheDocument();
  }
}
export const testCase478: Story = {
  args: {
    tasks: ["仢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仢`)
    ).toBeInTheDocument();
  }
}
export const testCase479: Story = {
  args: {
    tasks: ["代"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 代`)
    ).toBeInTheDocument();
  }
}
export const testCase480: Story = {
  args: {
    tasks: ["令"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 令`)
    ).toBeInTheDocument();
  }
}
export const testCase481: Story = {
  args: {
    tasks: ["以"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 以`)
    ).toBeInTheDocument();
  }
}
export const testCase482: Story = {
  args: {
    tasks: ["仦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仦`)
    ).toBeInTheDocument();
  }
}
export const testCase483: Story = {
  args: {
    tasks: ["仧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仧`)
    ).toBeInTheDocument();
  }
}
export const testCase484: Story = {
  args: {
    tasks: ["仨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仨`)
    ).toBeInTheDocument();
  }
}
export const testCase485: Story = {
  args: {
    tasks: ["仩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仩`)
    ).toBeInTheDocument();
  }
}
export const testCase486: Story = {
  args: {
    tasks: ["仪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仪`)
    ).toBeInTheDocument();
  }
}
export const testCase487: Story = {
  args: {
    tasks: ["仫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仫`)
    ).toBeInTheDocument();
  }
}
export const testCase488: Story = {
  args: {
    tasks: ["们"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 们`)
    ).toBeInTheDocument();
  }
}
export const testCase489: Story = {
  args: {
    tasks: ["仭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仭`)
    ).toBeInTheDocument();
  }
}
export const testCase490: Story = {
  args: {
    tasks: ["仮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仮`)
    ).toBeInTheDocument();
  }
}
export const testCase491: Story = {
  args: {
    tasks: ["仯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仯`)
    ).toBeInTheDocument();
  }
}
export const testCase492: Story = {
  args: {
    tasks: ["仰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仰`)
    ).toBeInTheDocument();
  }
}
export const testCase493: Story = {
  args: {
    tasks: ["仱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仱`)
    ).toBeInTheDocument();
  }
}
export const testCase494: Story = {
  args: {
    tasks: ["仲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仲`)
    ).toBeInTheDocument();
  }
}
export const testCase495: Story = {
  args: {
    tasks: ["仳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仳`)
    ).toBeInTheDocument();
  }
}
export const testCase496: Story = {
  args: {
    tasks: ["仴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仴`)
    ).toBeInTheDocument();
  }
}
export const testCase497: Story = {
  args: {
    tasks: ["仵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仵`)
    ).toBeInTheDocument();
  }
}
export const testCase498: Story = {
  args: {
    tasks: ["件"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 件`)
    ).toBeInTheDocument();
  }
}
export const testCase499: Story = {
  args: {
    tasks: ["价"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 价`)
    ).toBeInTheDocument();
  }
}
export const testCase500: Story = {
  args: {
    tasks: ["仸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仸`)
    ).toBeInTheDocument();
  }
}
export const testCase501: Story = {
  args: {
    tasks: ["仹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仹`)
    ).toBeInTheDocument();
  }
}
export const testCase502: Story = {
  args: {
    tasks: ["仺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仺`)
    ).toBeInTheDocument();
  }
}
export const testCase503: Story = {
  args: {
    tasks: ["任"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 任`)
    ).toBeInTheDocument();
  }
}
export const testCase504: Story = {
  args: {
    tasks: ["仼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仼`)
    ).toBeInTheDocument();
  }
}
export const testCase505: Story = {
  args: {
    tasks: ["份"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 份`)
    ).toBeInTheDocument();
  }
}
export const testCase506: Story = {
  args: {
    tasks: ["仾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仾`)
    ).toBeInTheDocument();
  }
}
export const testCase507: Story = {
  args: {
    tasks: ["仿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 仿`)
    ).toBeInTheDocument();
  }
}
export const testCase508: Story = {
  args: {
    tasks: ["伀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伀`)
    ).toBeInTheDocument();
  }
}
export const testCase509: Story = {
  args: {
    tasks: ["企"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 企`)
    ).toBeInTheDocument();
  }
}
export const testCase510: Story = {
  args: {
    tasks: ["伂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伂`)
    ).toBeInTheDocument();
  }
}
export const testCase511: Story = {
  args: {
    tasks: ["伃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伃`)
    ).toBeInTheDocument();
  }
}
export const testCase512: Story = {
  args: {
    tasks: ["伄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伄`)
    ).toBeInTheDocument();
  }
}
export const testCase513: Story = {
  args: {
    tasks: ["伅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伅`)
    ).toBeInTheDocument();
  }
}
export const testCase514: Story = {
  args: {
    tasks: ["伆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伆`)
    ).toBeInTheDocument();
  }
}
export const testCase515: Story = {
  args: {
    tasks: ["伇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伇`)
    ).toBeInTheDocument();
  }
}
export const testCase516: Story = {
  args: {
    tasks: ["伈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伈`)
    ).toBeInTheDocument();
  }
}
export const testCase517: Story = {
  args: {
    tasks: ["伉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伉`)
    ).toBeInTheDocument();
  }
}
export const testCase518: Story = {
  args: {
    tasks: ["伊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伊`)
    ).toBeInTheDocument();
  }
}
export const testCase519: Story = {
  args: {
    tasks: ["伋"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伋`)
    ).toBeInTheDocument();
  }
}
export const testCase520: Story = {
  args: {
    tasks: ["伌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伌`)
    ).toBeInTheDocument();
  }
}
export const testCase521: Story = {
  args: {
    tasks: ["伍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伍`)
    ).toBeInTheDocument();
  }
}
export const testCase522: Story = {
  args: {
    tasks: ["伎"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伎`)
    ).toBeInTheDocument();
  }
}
export const testCase523: Story = {
  args: {
    tasks: ["伏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伏`)
    ).toBeInTheDocument();
  }
}
export const testCase524: Story = {
  args: {
    tasks: ["伐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伐`)
    ).toBeInTheDocument();
  }
}
export const testCase525: Story = {
  args: {
    tasks: ["休"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 休`)
    ).toBeInTheDocument();
  }
}
export const testCase526: Story = {
  args: {
    tasks: ["伒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伒`)
    ).toBeInTheDocument();
  }
}
export const testCase527: Story = {
  args: {
    tasks: ["伓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伓`)
    ).toBeInTheDocument();
  }
}
export const testCase528: Story = {
  args: {
    tasks: ["伔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伔`)
    ).toBeInTheDocument();
  }
}
export const testCase529: Story = {
  args: {
    tasks: ["伕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伕`)
    ).toBeInTheDocument();
  }
}
export const testCase530: Story = {
  args: {
    tasks: ["伖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伖`)
    ).toBeInTheDocument();
  }
}
export const testCase531: Story = {
  args: {
    tasks: ["众"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 众`)
    ).toBeInTheDocument();
  }
}
export const testCase532: Story = {
  args: {
    tasks: ["优"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 优`)
    ).toBeInTheDocument();
  }
}
export const testCase533: Story = {
  args: {
    tasks: ["伙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伙`)
    ).toBeInTheDocument();
  }
}
export const testCase534: Story = {
  args: {
    tasks: ["会"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 会`)
    ).toBeInTheDocument();
  }
}
export const testCase535: Story = {
  args: {
    tasks: ["伛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伛`)
    ).toBeInTheDocument();
  }
}
export const testCase536: Story = {
  args: {
    tasks: ["伜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伜`)
    ).toBeInTheDocument();
  }
}
export const testCase537: Story = {
  args: {
    tasks: ["伝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伝`)
    ).toBeInTheDocument();
  }
}
export const testCase538: Story = {
  args: {
    tasks: ["伞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伞`)
    ).toBeInTheDocument();
  }
}
export const testCase539: Story = {
  args: {
    tasks: ["伟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伟`)
    ).toBeInTheDocument();
  }
}
export const testCase540: Story = {
  args: {
    tasks: ["传"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 传`)
    ).toBeInTheDocument();
  }
}
export const testCase541: Story = {
  args: {
    tasks: ["伡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伡`)
    ).toBeInTheDocument();
  }
}
export const testCase542: Story = {
  args: {
    tasks: ["伢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伢`)
    ).toBeInTheDocument();
  }
}
export const testCase543: Story = {
  args: {
    tasks: ["伣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伣`)
    ).toBeInTheDocument();
  }
}
export const testCase544: Story = {
  args: {
    tasks: ["伤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伤`)
    ).toBeInTheDocument();
  }
}
export const testCase545: Story = {
  args: {
    tasks: ["伥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伥`)
    ).toBeInTheDocument();
  }
}
export const testCase546: Story = {
  args: {
    tasks: ["伦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伦`)
    ).toBeInTheDocument();
  }
}
export const testCase547: Story = {
  args: {
    tasks: ["伧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伧`)
    ).toBeInTheDocument();
  }
}
export const testCase548: Story = {
  args: {
    tasks: ["伨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伨`)
    ).toBeInTheDocument();
  }
}
export const testCase549: Story = {
  args: {
    tasks: ["伩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伩`)
    ).toBeInTheDocument();
  }
}
export const testCase550: Story = {
  args: {
    tasks: ["伪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伪`)
    ).toBeInTheDocument();
  }
}
export const testCase551: Story = {
  args: {
    tasks: ["伫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伫`)
    ).toBeInTheDocument();
  }
}
export const testCase552: Story = {
  args: {
    tasks: ["伬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伬`)
    ).toBeInTheDocument();
  }
}
export const testCase553: Story = {
  args: {
    tasks: ["伭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伭`)
    ).toBeInTheDocument();
  }
}
export const testCase554: Story = {
  args: {
    tasks: ["伮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伮`)
    ).toBeInTheDocument();
  }
}
export const testCase555: Story = {
  args: {
    tasks: ["伯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伯`)
    ).toBeInTheDocument();
  }
}
export const testCase556: Story = {
  args: {
    tasks: ["估"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 估`)
    ).toBeInTheDocument();
  }
}
export const testCase557: Story = {
  args: {
    tasks: ["伱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伱`)
    ).toBeInTheDocument();
  }
}
export const testCase558: Story = {
  args: {
    tasks: ["伲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伲`)
    ).toBeInTheDocument();
  }
}
export const testCase559: Story = {
  args: {
    tasks: ["伳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伳`)
    ).toBeInTheDocument();
  }
}
export const testCase560: Story = {
  args: {
    tasks: ["伴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伴`)
    ).toBeInTheDocument();
  }
}
export const testCase561: Story = {
  args: {
    tasks: ["伵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伵`)
    ).toBeInTheDocument();
  }
}
export const testCase562: Story = {
  args: {
    tasks: ["伶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伶`)
    ).toBeInTheDocument();
  }
}
export const testCase563: Story = {
  args: {
    tasks: ["伷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伷`)
    ).toBeInTheDocument();
  }
}
export const testCase564: Story = {
  args: {
    tasks: ["伸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伸`)
    ).toBeInTheDocument();
  }
}
export const testCase565: Story = {
  args: {
    tasks: ["伹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伹`)
    ).toBeInTheDocument();
  }
}
export const testCase566: Story = {
  args: {
    tasks: ["伺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伺`)
    ).toBeInTheDocument();
  }
}
export const testCase567: Story = {
  args: {
    tasks: ["伻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伻`)
    ).toBeInTheDocument();
  }
}
export const testCase568: Story = {
  args: {
    tasks: ["似"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 似`)
    ).toBeInTheDocument();
  }
}
export const testCase569: Story = {
  args: {
    tasks: ["伽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伽`)
    ).toBeInTheDocument();
  }
}
export const testCase570: Story = {
  args: {
    tasks: ["伾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伾`)
    ).toBeInTheDocument();
  }
}
export const testCase571: Story = {
  args: {
    tasks: ["伿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 伿`)
    ).toBeInTheDocument();
  }
}
export const testCase572: Story = {
  args: {
    tasks: ["佀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佀`)
    ).toBeInTheDocument();
  }
}
export const testCase573: Story = {
  args: {
    tasks: ["佁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佁`)
    ).toBeInTheDocument();
  }
}
export const testCase574: Story = {
  args: {
    tasks: ["佂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佂`)
    ).toBeInTheDocument();
  }
}
export const testCase575: Story = {
  args: {
    tasks: ["佃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佃`)
    ).toBeInTheDocument();
  }
}
export const testCase576: Story = {
  args: {
    tasks: ["佄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佄`)
    ).toBeInTheDocument();
  }
}
export const testCase577: Story = {
  args: {
    tasks: ["佅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佅`)
    ).toBeInTheDocument();
  }
}
export const testCase578: Story = {
  args: {
    tasks: ["但"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 但`)
    ).toBeInTheDocument();
  }
}
export const testCase579: Story = {
  args: {
    tasks: ["佇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佇`)
    ).toBeInTheDocument();
  }
}
export const testCase580: Story = {
  args: {
    tasks: ["佈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佈`)
    ).toBeInTheDocument();
  }
}
export const testCase581: Story = {
  args: {
    tasks: ["佉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佉`)
    ).toBeInTheDocument();
  }
}
export const testCase582: Story = {
  args: {
    tasks: ["佊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佊`)
    ).toBeInTheDocument();
  }
}
export const testCase583: Story = {
  args: {
    tasks: ["佋"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佋`)
    ).toBeInTheDocument();
  }
}
export const testCase584: Story = {
  args: {
    tasks: ["佌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佌`)
    ).toBeInTheDocument();
  }
}
export const testCase585: Story = {
  args: {
    tasks: ["位"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 位`)
    ).toBeInTheDocument();
  }
}
export const testCase586: Story = {
  args: {
    tasks: ["低"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 低`)
    ).toBeInTheDocument();
  }
}
export const testCase587: Story = {
  args: {
    tasks: ["住"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 住`)
    ).toBeInTheDocument();
  }
}
export const testCase588: Story = {
  args: {
    tasks: ["佐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佐`)
    ).toBeInTheDocument();
  }
}
export const testCase589: Story = {
  args: {
    tasks: ["佑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佑`)
    ).toBeInTheDocument();
  }
}
export const testCase590: Story = {
  args: {
    tasks: ["佒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佒`)
    ).toBeInTheDocument();
  }
}
export const testCase591: Story = {
  args: {
    tasks: ["体"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 体`)
    ).toBeInTheDocument();
  }
}
export const testCase592: Story = {
  args: {
    tasks: ["佔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佔`)
    ).toBeInTheDocument();
  }
}
export const testCase593: Story = {
  args: {
    tasks: ["何"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 何`)
    ).toBeInTheDocument();
  }
}
export const testCase594: Story = {
  args: {
    tasks: ["佖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佖`)
    ).toBeInTheDocument();
  }
}
export const testCase595: Story = {
  args: {
    tasks: ["佗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佗`)
    ).toBeInTheDocument();
  }
}
export const testCase596: Story = {
  args: {
    tasks: ["佘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佘`)
    ).toBeInTheDocument();
  }
}
export const testCase597: Story = {
  args: {
    tasks: ["余"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 余`)
    ).toBeInTheDocument();
  }
}
export const testCase598: Story = {
  args: {
    tasks: ["佚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佚`)
    ).toBeInTheDocument();
  }
}
export const testCase599: Story = {
  args: {
    tasks: ["佛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佛`)
    ).toBeInTheDocument();
  }
}
export const testCase600: Story = {
  args: {
    tasks: ["作"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 作`)
    ).toBeInTheDocument();
  }
}
export const testCase601: Story = {
  args: {
    tasks: ["佝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佝`)
    ).toBeInTheDocument();
  }
}
export const testCase602: Story = {
  args: {
    tasks: ["佞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佞`)
    ).toBeInTheDocument();
  }
}
export const testCase603: Story = {
  args: {
    tasks: ["佟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佟`)
    ).toBeInTheDocument();
  }
}
export const testCase604: Story = {
  args: {
    tasks: ["你"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 你`)
    ).toBeInTheDocument();
  }
}
export const testCase605: Story = {
  args: {
    tasks: ["佡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佡`)
    ).toBeInTheDocument();
  }
}
export const testCase606: Story = {
  args: {
    tasks: ["佢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佢`)
    ).toBeInTheDocument();
  }
}
export const testCase607: Story = {
  args: {
    tasks: ["佣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佣`)
    ).toBeInTheDocument();
  }
}
export const testCase608: Story = {
  args: {
    tasks: ["佤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佤`)
    ).toBeInTheDocument();
  }
}
export const testCase609: Story = {
  args: {
    tasks: ["佥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佥`)
    ).toBeInTheDocument();
  }
}
export const testCase610: Story = {
  args: {
    tasks: ["佦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佦`)
    ).toBeInTheDocument();
  }
}
export const testCase611: Story = {
  args: {
    tasks: ["佧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佧`)
    ).toBeInTheDocument();
  }
}
export const testCase612: Story = {
  args: {
    tasks: ["佨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佨`)
    ).toBeInTheDocument();
  }
}
export const testCase613: Story = {
  args: {
    tasks: ["佩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佩`)
    ).toBeInTheDocument();
  }
}
export const testCase614: Story = {
  args: {
    tasks: ["佪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佪`)
    ).toBeInTheDocument();
  }
}
export const testCase615: Story = {
  args: {
    tasks: ["佫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佫`)
    ).toBeInTheDocument();
  }
}
export const testCase616: Story = {
  args: {
    tasks: ["佬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佬`)
    ).toBeInTheDocument();
  }
}
export const testCase617: Story = {
  args: {
    tasks: ["佭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佭`)
    ).toBeInTheDocument();
  }
}
export const testCase618: Story = {
  args: {
    tasks: ["佮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佮`)
    ).toBeInTheDocument();
  }
}
export const testCase619: Story = {
  args: {
    tasks: ["佯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佯`)
    ).toBeInTheDocument();
  }
}
export const testCase620: Story = {
  args: {
    tasks: ["佰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佰`)
    ).toBeInTheDocument();
  }
}
export const testCase621: Story = {
  args: {
    tasks: ["佱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佱`)
    ).toBeInTheDocument();
  }
}
export const testCase622: Story = {
  args: {
    tasks: ["佲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佲`)
    ).toBeInTheDocument();
  }
}
export const testCase623: Story = {
  args: {
    tasks: ["佳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佳`)
    ).toBeInTheDocument();
  }
}
export const testCase624: Story = {
  args: {
    tasks: ["佴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佴`)
    ).toBeInTheDocument();
  }
}
export const testCase625: Story = {
  args: {
    tasks: ["併"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 併`)
    ).toBeInTheDocument();
  }
}
export const testCase626: Story = {
  args: {
    tasks: ["佶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佶`)
    ).toBeInTheDocument();
  }
}
export const testCase627: Story = {
  args: {
    tasks: ["佷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佷`)
    ).toBeInTheDocument();
  }
}
export const testCase628: Story = {
  args: {
    tasks: ["佸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佸`)
    ).toBeInTheDocument();
  }
}
export const testCase629: Story = {
  args: {
    tasks: ["佹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佹`)
    ).toBeInTheDocument();
  }
}
export const testCase630: Story = {
  args: {
    tasks: ["佺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佺`)
    ).toBeInTheDocument();
  }
}
export const testCase631: Story = {
  args: {
    tasks: ["佻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佻`)
    ).toBeInTheDocument();
  }
}
export const testCase632: Story = {
  args: {
    tasks: ["佼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佼`)
    ).toBeInTheDocument();
  }
}
export const testCase633: Story = {
  args: {
    tasks: ["佽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佽`)
    ).toBeInTheDocument();
  }
}
export const testCase634: Story = {
  args: {
    tasks: ["佾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 佾`)
    ).toBeInTheDocument();
  }
}
export const testCase635: Story = {
  args: {
    tasks: ["使"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 使`)
    ).toBeInTheDocument();
  }
}
export const testCase636: Story = {
  args: {
    tasks: ["侀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侀`)
    ).toBeInTheDocument();
  }
}
export const testCase637: Story = {
  args: {
    tasks: ["侁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侁`)
    ).toBeInTheDocument();
  }
}
export const testCase638: Story = {
  args: {
    tasks: ["侂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侂`)
    ).toBeInTheDocument();
  }
}
export const testCase639: Story = {
  args: {
    tasks: ["侃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侃`)
    ).toBeInTheDocument();
  }
}
export const testCase640: Story = {
  args: {
    tasks: ["侄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侄`)
    ).toBeInTheDocument();
  }
}
export const testCase641: Story = {
  args: {
    tasks: ["侅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侅`)
    ).toBeInTheDocument();
  }
}
export const testCase642: Story = {
  args: {
    tasks: ["來"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 來`)
    ).toBeInTheDocument();
  }
}
export const testCase643: Story = {
  args: {
    tasks: ["侇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侇`)
    ).toBeInTheDocument();
  }
}
export const testCase644: Story = {
  args: {
    tasks: ["侈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侈`)
    ).toBeInTheDocument();
  }
}
export const testCase645: Story = {
  args: {
    tasks: ["侉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侉`)
    ).toBeInTheDocument();
  }
}
export const testCase646: Story = {
  args: {
    tasks: ["侊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侊`)
    ).toBeInTheDocument();
  }
}
export const testCase647: Story = {
  args: {
    tasks: ["例"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 例`)
    ).toBeInTheDocument();
  }
}
export const testCase648: Story = {
  args: {
    tasks: ["侌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侌`)
    ).toBeInTheDocument();
  }
}
export const testCase649: Story = {
  args: {
    tasks: ["侍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侍`)
    ).toBeInTheDocument();
  }
}
export const testCase650: Story = {
  args: {
    tasks: ["侎"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侎`)
    ).toBeInTheDocument();
  }
}
export const testCase651: Story = {
  args: {
    tasks: ["侏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侏`)
    ).toBeInTheDocument();
  }
}
export const testCase652: Story = {
  args: {
    tasks: ["侐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侐`)
    ).toBeInTheDocument();
  }
}
export const testCase653: Story = {
  args: {
    tasks: ["侑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侑`)
    ).toBeInTheDocument();
  }
}
export const testCase654: Story = {
  args: {
    tasks: ["侒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侒`)
    ).toBeInTheDocument();
  }
}
export const testCase655: Story = {
  args: {
    tasks: ["侓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侓`)
    ).toBeInTheDocument();
  }
}
export const testCase656: Story = {
  args: {
    tasks: ["侔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侔`)
    ).toBeInTheDocument();
  }
}
export const testCase657: Story = {
  args: {
    tasks: ["侕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侕`)
    ).toBeInTheDocument();
  }
}
export const testCase658: Story = {
  args: {
    tasks: ["侖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侖`)
    ).toBeInTheDocument();
  }
}
export const testCase659: Story = {
  args: {
    tasks: ["侗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侗`)
    ).toBeInTheDocument();
  }
}
export const testCase660: Story = {
  args: {
    tasks: ["侘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侘`)
    ).toBeInTheDocument();
  }
}
export const testCase661: Story = {
  args: {
    tasks: ["侙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侙`)
    ).toBeInTheDocument();
  }
}
export const testCase662: Story = {
  args: {
    tasks: ["侚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侚`)
    ).toBeInTheDocument();
  }
}
export const testCase663: Story = {
  args: {
    tasks: ["供"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 供`)
    ).toBeInTheDocument();
  }
}
export const testCase664: Story = {
  args: {
    tasks: ["侜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侜`)
    ).toBeInTheDocument();
  }
}
export const testCase665: Story = {
  args: {
    tasks: ["依"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 依`)
    ).toBeInTheDocument();
  }
}
export const testCase666: Story = {
  args: {
    tasks: ["侞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侞`)
    ).toBeInTheDocument();
  }
}
export const testCase667: Story = {
  args: {
    tasks: ["侟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侟`)
    ).toBeInTheDocument();
  }
}
export const testCase668: Story = {
  args: {
    tasks: ["侠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侠`)
    ).toBeInTheDocument();
  }
}
export const testCase669: Story = {
  args: {
    tasks: ["価"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 価`)
    ).toBeInTheDocument();
  }
}
export const testCase670: Story = {
  args: {
    tasks: ["侢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侢`)
    ).toBeInTheDocument();
  }
}
export const testCase671: Story = {
  args: {
    tasks: ["侣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侣`)
    ).toBeInTheDocument();
  }
}
export const testCase672: Story = {
  args: {
    tasks: ["侤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侤`)
    ).toBeInTheDocument();
  }
}
export const testCase673: Story = {
  args: {
    tasks: ["侥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侥`)
    ).toBeInTheDocument();
  }
}
export const testCase674: Story = {
  args: {
    tasks: ["侦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侦`)
    ).toBeInTheDocument();
  }
}
export const testCase675: Story = {
  args: {
    tasks: ["侧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侧`)
    ).toBeInTheDocument();
  }
}
export const testCase676: Story = {
  args: {
    tasks: ["侨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侨`)
    ).toBeInTheDocument();
  }
}
export const testCase677: Story = {
  args: {
    tasks: ["侩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侩`)
    ).toBeInTheDocument();
  }
}
export const testCase678: Story = {
  args: {
    tasks: ["侪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侪`)
    ).toBeInTheDocument();
  }
}
export const testCase679: Story = {
  args: {
    tasks: ["侫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侫`)
    ).toBeInTheDocument();
  }
}
export const testCase680: Story = {
  args: {
    tasks: ["侬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侬`)
    ).toBeInTheDocument();
  }
}
export const testCase681: Story = {
  args: {
    tasks: ["侭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侭`)
    ).toBeInTheDocument();
  }
}
export const testCase682: Story = {
  args: {
    tasks: ["侮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侮`)
    ).toBeInTheDocument();
  }
}
export const testCase683: Story = {
  args: {
    tasks: ["侯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侯`)
    ).toBeInTheDocument();
  }
}
export const testCase684: Story = {
  args: {
    tasks: ["侰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侰`)
    ).toBeInTheDocument();
  }
}
export const testCase685: Story = {
  args: {
    tasks: ["侱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侱`)
    ).toBeInTheDocument();
  }
}
export const testCase686: Story = {
  args: {
    tasks: ["侲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侲`)
    ).toBeInTheDocument();
  }
}
export const testCase687: Story = {
  args: {
    tasks: ["侳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侳`)
    ).toBeInTheDocument();
  }
}
export const testCase688: Story = {
  args: {
    tasks: ["侴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侴`)
    ).toBeInTheDocument();
  }
}
export const testCase689: Story = {
  args: {
    tasks: ["侵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侵`)
    ).toBeInTheDocument();
  }
}
export const testCase690: Story = {
  args: {
    tasks: ["侶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侶`)
    ).toBeInTheDocument();
  }
}
export const testCase691: Story = {
  args: {
    tasks: ["侷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侷`)
    ).toBeInTheDocument();
  }
}
export const testCase692: Story = {
  args: {
    tasks: ["侸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侸`)
    ).toBeInTheDocument();
  }
}
export const testCase693: Story = {
  args: {
    tasks: ["侹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侹`)
    ).toBeInTheDocument();
  }
}
export const testCase694: Story = {
  args: {
    tasks: ["侺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侺`)
    ).toBeInTheDocument();
  }
}
export const testCase695: Story = {
  args: {
    tasks: ["侻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侻`)
    ).toBeInTheDocument();
  }
}
export const testCase696: Story = {
  args: {
    tasks: ["侼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侼`)
    ).toBeInTheDocument();
  }
}
export const testCase697: Story = {
  args: {
    tasks: ["侽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侽`)
    ).toBeInTheDocument();
  }
}
export const testCase698: Story = {
  args: {
    tasks: ["侾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 侾`)
    ).toBeInTheDocument();
  }
}
export const testCase699: Story = {
  args: {
    tasks: ["便"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 便`)
    ).toBeInTheDocument();
  }
}
export const testCase700: Story = {
  args: {
    tasks: ["俀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俀`)
    ).toBeInTheDocument();
  }
}
export const testCase701: Story = {
  args: {
    tasks: ["俁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俁`)
    ).toBeInTheDocument();
  }
}
export const testCase702: Story = {
  args: {
    tasks: ["係"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 係`)
    ).toBeInTheDocument();
  }
}
export const testCase703: Story = {
  args: {
    tasks: ["促"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 促`)
    ).toBeInTheDocument();
  }
}
export const testCase704: Story = {
  args: {
    tasks: ["俄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俄`)
    ).toBeInTheDocument();
  }
}
export const testCase705: Story = {
  args: {
    tasks: ["俅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俅`)
    ).toBeInTheDocument();
  }
}
export const testCase706: Story = {
  args: {
    tasks: ["俆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俆`)
    ).toBeInTheDocument();
  }
}
export const testCase707: Story = {
  args: {
    tasks: ["俇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俇`)
    ).toBeInTheDocument();
  }
}
export const testCase708: Story = {
  args: {
    tasks: ["俈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俈`)
    ).toBeInTheDocument();
  }
}
export const testCase709: Story = {
  args: {
    tasks: ["俉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俉`)
    ).toBeInTheDocument();
  }
}
export const testCase710: Story = {
  args: {
    tasks: ["俊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俊`)
    ).toBeInTheDocument();
  }
}
export const testCase711: Story = {
  args: {
    tasks: ["俋"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俋`)
    ).toBeInTheDocument();
  }
}
export const testCase712: Story = {
  args: {
    tasks: ["俌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俌`)
    ).toBeInTheDocument();
  }
}
export const testCase713: Story = {
  args: {
    tasks: ["俍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俍`)
    ).toBeInTheDocument();
  }
}
export const testCase714: Story = {
  args: {
    tasks: ["俎"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俎`)
    ).toBeInTheDocument();
  }
}
export const testCase715: Story = {
  args: {
    tasks: ["俏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俏`)
    ).toBeInTheDocument();
  }
}
export const testCase716: Story = {
  args: {
    tasks: ["俐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俐`)
    ).toBeInTheDocument();
  }
}
export const testCase717: Story = {
  args: {
    tasks: ["俑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俑`)
    ).toBeInTheDocument();
  }
}
export const testCase718: Story = {
  args: {
    tasks: ["俒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俒`)
    ).toBeInTheDocument();
  }
}
export const testCase719: Story = {
  args: {
    tasks: ["俓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俓`)
    ).toBeInTheDocument();
  }
}
export const testCase720: Story = {
  args: {
    tasks: ["俔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俔`)
    ).toBeInTheDocument();
  }
}
export const testCase721: Story = {
  args: {
    tasks: ["俕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俕`)
    ).toBeInTheDocument();
  }
}
export const testCase722: Story = {
  args: {
    tasks: ["俖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俖`)
    ).toBeInTheDocument();
  }
}
export const testCase723: Story = {
  args: {
    tasks: ["俗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俗`)
    ).toBeInTheDocument();
  }
}
export const testCase724: Story = {
  args: {
    tasks: ["俘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俘`)
    ).toBeInTheDocument();
  }
}
export const testCase725: Story = {
  args: {
    tasks: ["俙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俙`)
    ).toBeInTheDocument();
  }
}
export const testCase726: Story = {
  args: {
    tasks: ["俚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俚`)
    ).toBeInTheDocument();
  }
}
export const testCase727: Story = {
  args: {
    tasks: ["俛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俛`)
    ).toBeInTheDocument();
  }
}
export const testCase728: Story = {
  args: {
    tasks: ["俜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俜`)
    ).toBeInTheDocument();
  }
}
export const testCase729: Story = {
  args: {
    tasks: ["保"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 保`)
    ).toBeInTheDocument();
  }
}
export const testCase730: Story = {
  args: {
    tasks: ["俞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俞`)
    ).toBeInTheDocument();
  }
}
export const testCase731: Story = {
  args: {
    tasks: ["俟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俟`)
    ).toBeInTheDocument();
  }
}
export const testCase732: Story = {
  args: {
    tasks: ["俠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俠`)
    ).toBeInTheDocument();
  }
}
export const testCase733: Story = {
  args: {
    tasks: ["信"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 信`)
    ).toBeInTheDocument();
  }
}
export const testCase734: Story = {
  args: {
    tasks: ["俢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俢`)
    ).toBeInTheDocument();
  }
}
export const testCase735: Story = {
  args: {
    tasks: ["俣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俣`)
    ).toBeInTheDocument();
  }
}
export const testCase736: Story = {
  args: {
    tasks: ["俤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俤`)
    ).toBeInTheDocument();
  }
}
export const testCase737: Story = {
  args: {
    tasks: ["俥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俥`)
    ).toBeInTheDocument();
  }
}
export const testCase738: Story = {
  args: {
    tasks: ["俦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俦`)
    ).toBeInTheDocument();
  }
}
export const testCase739: Story = {
  args: {
    tasks: ["俧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俧`)
    ).toBeInTheDocument();
  }
}
export const testCase740: Story = {
  args: {
    tasks: ["俨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俨`)
    ).toBeInTheDocument();
  }
}
export const testCase741: Story = {
  args: {
    tasks: ["俩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俩`)
    ).toBeInTheDocument();
  }
}
export const testCase742: Story = {
  args: {
    tasks: ["俪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俪`)
    ).toBeInTheDocument();
  }
}
export const testCase743: Story = {
  args: {
    tasks: ["俫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俫`)
    ).toBeInTheDocument();
  }
}
export const testCase744: Story = {
  args: {
    tasks: ["俬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俬`)
    ).toBeInTheDocument();
  }
}
export const testCase745: Story = {
  args: {
    tasks: ["俭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俭`)
    ).toBeInTheDocument();
  }
}
export const testCase746: Story = {
  args: {
    tasks: ["修"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 修`)
    ).toBeInTheDocument();
  }
}
export const testCase747: Story = {
  args: {
    tasks: ["俯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俯`)
    ).toBeInTheDocument();
  }
}
export const testCase748: Story = {
  args: {
    tasks: ["俰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俰`)
    ).toBeInTheDocument();
  }
}
export const testCase749: Story = {
  args: {
    tasks: ["俱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俱`)
    ).toBeInTheDocument();
  }
}
export const testCase750: Story = {
  args: {
    tasks: ["俲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俲`)
    ).toBeInTheDocument();
  }
}
export const testCase751: Story = {
  args: {
    tasks: ["俳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俳`)
    ).toBeInTheDocument();
  }
}
export const testCase752: Story = {
  args: {
    tasks: ["俴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俴`)
    ).toBeInTheDocument();
  }
}
export const testCase753: Story = {
  args: {
    tasks: ["俵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俵`)
    ).toBeInTheDocument();
  }
}
export const testCase754: Story = {
  args: {
    tasks: ["俶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俶`)
    ).toBeInTheDocument();
  }
}
export const testCase755: Story = {
  args: {
    tasks: ["俷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俷`)
    ).toBeInTheDocument();
  }
}
export const testCase756: Story = {
  args: {
    tasks: ["俸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俸`)
    ).toBeInTheDocument();
  }
}
export const testCase757: Story = {
  args: {
    tasks: ["俹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俹`)
    ).toBeInTheDocument();
  }
}
export const testCase758: Story = {
  args: {
    tasks: ["俺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俺`)
    ).toBeInTheDocument();
  }
}
export const testCase759: Story = {
  args: {
    tasks: ["俻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俻`)
    ).toBeInTheDocument();
  }
}
export const testCase760: Story = {
  args: {
    tasks: ["俼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俼`)
    ).toBeInTheDocument();
  }
}
export const testCase761: Story = {
  args: {
    tasks: ["俽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俽`)
    ).toBeInTheDocument();
  }
}
export const testCase762: Story = {
  args: {
    tasks: ["俾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俾`)
    ).toBeInTheDocument();
  }
}
export const testCase763: Story = {
  args: {
    tasks: ["俿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 俿`)
    ).toBeInTheDocument();
  }
}
export const testCase764: Story = {
  args: {
    tasks: ["倀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倀`)
    ).toBeInTheDocument();
  }
}
export const testCase765: Story = {
  args: {
    tasks: ["倁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倁`)
    ).toBeInTheDocument();
  }
}
export const testCase766: Story = {
  args: {
    tasks: ["倂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倂`)
    ).toBeInTheDocument();
  }
}
export const testCase767: Story = {
  args: {
    tasks: ["倃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倃`)
    ).toBeInTheDocument();
  }
}
export const testCase768: Story = {
  args: {
    tasks: ["倄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倄`)
    ).toBeInTheDocument();
  }
}
export const testCase769: Story = {
  args: {
    tasks: ["倅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倅`)
    ).toBeInTheDocument();
  }
}
export const testCase770: Story = {
  args: {
    tasks: ["倆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倆`)
    ).toBeInTheDocument();
  }
}
export const testCase771: Story = {
  args: {
    tasks: ["倇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倇`)
    ).toBeInTheDocument();
  }
}
export const testCase772: Story = {
  args: {
    tasks: ["倈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倈`)
    ).toBeInTheDocument();
  }
}
export const testCase773: Story = {
  args: {
    tasks: ["倉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倉`)
    ).toBeInTheDocument();
  }
}
export const testCase774: Story = {
  args: {
    tasks: ["倊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倊`)
    ).toBeInTheDocument();
  }
}
export const testCase775: Story = {
  args: {
    tasks: ["個"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 個`)
    ).toBeInTheDocument();
  }
}
export const testCase776: Story = {
  args: {
    tasks: ["倌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倌`)
    ).toBeInTheDocument();
  }
}
export const testCase777: Story = {
  args: {
    tasks: ["倍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倍`)
    ).toBeInTheDocument();
  }
}
export const testCase778: Story = {
  args: {
    tasks: ["倎"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倎`)
    ).toBeInTheDocument();
  }
}
export const testCase779: Story = {
  args: {
    tasks: ["倏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倏`)
    ).toBeInTheDocument();
  }
}
export const testCase780: Story = {
  args: {
    tasks: ["倐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倐`)
    ).toBeInTheDocument();
  }
}
export const testCase781: Story = {
  args: {
    tasks: ["們"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 們`)
    ).toBeInTheDocument();
  }
}
export const testCase782: Story = {
  args: {
    tasks: ["倒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倒`)
    ).toBeInTheDocument();
  }
}
export const testCase783: Story = {
  args: {
    tasks: ["倓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倓`)
    ).toBeInTheDocument();
  }
}
export const testCase784: Story = {
  args: {
    tasks: ["倔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倔`)
    ).toBeInTheDocument();
  }
}
export const testCase785: Story = {
  args: {
    tasks: ["倕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倕`)
    ).toBeInTheDocument();
  }
}
export const testCase786: Story = {
  args: {
    tasks: ["倖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倖`)
    ).toBeInTheDocument();
  }
}
export const testCase787: Story = {
  args: {
    tasks: ["倗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倗`)
    ).toBeInTheDocument();
  }
}
export const testCase788: Story = {
  args: {
    tasks: ["倘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倘`)
    ).toBeInTheDocument();
  }
}
export const testCase789: Story = {
  args: {
    tasks: ["候"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 候`)
    ).toBeInTheDocument();
  }
}
export const testCase790: Story = {
  args: {
    tasks: ["倚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倚`)
    ).toBeInTheDocument();
  }
}
export const testCase791: Story = {
  args: {
    tasks: ["倛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倛`)
    ).toBeInTheDocument();
  }
}
export const testCase792: Story = {
  args: {
    tasks: ["倜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倜`)
    ).toBeInTheDocument();
  }
}
export const testCase793: Story = {
  args: {
    tasks: ["倝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倝`)
    ).toBeInTheDocument();
  }
}
export const testCase794: Story = {
  args: {
    tasks: ["倞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倞`)
    ).toBeInTheDocument();
  }
}
export const testCase795: Story = {
  args: {
    tasks: ["借"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 借`)
    ).toBeInTheDocument();
  }
}
export const testCase796: Story = {
  args: {
    tasks: ["倠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倠`)
    ).toBeInTheDocument();
  }
}
export const testCase797: Story = {
  args: {
    tasks: ["倡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倡`)
    ).toBeInTheDocument();
  }
}
export const testCase798: Story = {
  args: {
    tasks: ["倢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倢`)
    ).toBeInTheDocument();
  }
}
export const testCase799: Story = {
  args: {
    tasks: ["倣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倣`)
    ).toBeInTheDocument();
  }
}
export const testCase800: Story = {
  args: {
    tasks: ["値"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 値`)
    ).toBeInTheDocument();
  }
}
export const testCase801: Story = {
  args: {
    tasks: ["倥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倥`)
    ).toBeInTheDocument();
  }
}
export const testCase802: Story = {
  args: {
    tasks: ["倦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倦`)
    ).toBeInTheDocument();
  }
}
export const testCase803: Story = {
  args: {
    tasks: ["倧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倧`)
    ).toBeInTheDocument();
  }
}
export const testCase804: Story = {
  args: {
    tasks: ["倨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倨`)
    ).toBeInTheDocument();
  }
}
export const testCase805: Story = {
  args: {
    tasks: ["倩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倩`)
    ).toBeInTheDocument();
  }
}
export const testCase806: Story = {
  args: {
    tasks: ["倪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倪`)
    ).toBeInTheDocument();
  }
}
export const testCase807: Story = {
  args: {
    tasks: ["倫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倫`)
    ).toBeInTheDocument();
  }
}
export const testCase808: Story = {
  args: {
    tasks: ["倬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倬`)
    ).toBeInTheDocument();
  }
}
export const testCase809: Story = {
  args: {
    tasks: ["倭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倭`)
    ).toBeInTheDocument();
  }
}
export const testCase810: Story = {
  args: {
    tasks: ["倮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倮`)
    ).toBeInTheDocument();
  }
}
export const testCase811: Story = {
  args: {
    tasks: ["倯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倯`)
    ).toBeInTheDocument();
  }
}
export const testCase812: Story = {
  args: {
    tasks: ["倰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倰`)
    ).toBeInTheDocument();
  }
}
export const testCase813: Story = {
  args: {
    tasks: ["倱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倱`)
    ).toBeInTheDocument();
  }
}
export const testCase814: Story = {
  args: {
    tasks: ["倲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倲`)
    ).toBeInTheDocument();
  }
}
export const testCase815: Story = {
  args: {
    tasks: ["倳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倳`)
    ).toBeInTheDocument();
  }
}
export const testCase816: Story = {
  args: {
    tasks: ["倴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倴`)
    ).toBeInTheDocument();
  }
}
export const testCase817: Story = {
  args: {
    tasks: ["倵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倵`)
    ).toBeInTheDocument();
  }
}
export const testCase818: Story = {
  args: {
    tasks: ["倶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倶`)
    ).toBeInTheDocument();
  }
}
export const testCase819: Story = {
  args: {
    tasks: ["倷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倷`)
    ).toBeInTheDocument();
  }
}
export const testCase820: Story = {
  args: {
    tasks: ["倸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倸`)
    ).toBeInTheDocument();
  }
}
export const testCase821: Story = {
  args: {
    tasks: ["倹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倹`)
    ).toBeInTheDocument();
  }
}
export const testCase822: Story = {
  args: {
    tasks: ["债"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 债`)
    ).toBeInTheDocument();
  }
}
export const testCase823: Story = {
  args: {
    tasks: ["倻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倻`)
    ).toBeInTheDocument();
  }
}
export const testCase824: Story = {
  args: {
    tasks: ["值"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 值`)
    ).toBeInTheDocument();
  }
}
export const testCase825: Story = {
  args: {
    tasks: ["倽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倽`)
    ).toBeInTheDocument();
  }
}
export const testCase826: Story = {
  args: {
    tasks: ["倾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倾`)
    ).toBeInTheDocument();
  }
}
export const testCase827: Story = {
  args: {
    tasks: ["倿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 倿`)
    ).toBeInTheDocument();
  }
}
export const testCase828: Story = {
  args: {
    tasks: ["偀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偀`)
    ).toBeInTheDocument();
  }
}
export const testCase829: Story = {
  args: {
    tasks: ["偁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偁`)
    ).toBeInTheDocument();
  }
}
export const testCase830: Story = {
  args: {
    tasks: ["偂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偂`)
    ).toBeInTheDocument();
  }
}
export const testCase831: Story = {
  args: {
    tasks: ["偃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偃`)
    ).toBeInTheDocument();
  }
}
export const testCase832: Story = {
  args: {
    tasks: ["偄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偄`)
    ).toBeInTheDocument();
  }
}
export const testCase833: Story = {
  args: {
    tasks: ["偅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偅`)
    ).toBeInTheDocument();
  }
}
export const testCase834: Story = {
  args: {
    tasks: ["偆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偆`)
    ).toBeInTheDocument();
  }
}
export const testCase835: Story = {
  args: {
    tasks: ["假"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 假`)
    ).toBeInTheDocument();
  }
}
export const testCase836: Story = {
  args: {
    tasks: ["偈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偈`)
    ).toBeInTheDocument();
  }
}
export const testCase837: Story = {
  args: {
    tasks: ["偉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偉`)
    ).toBeInTheDocument();
  }
}
export const testCase838: Story = {
  args: {
    tasks: ["偊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偊`)
    ).toBeInTheDocument();
  }
}
export const testCase839: Story = {
  args: {
    tasks: ["偋"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偋`)
    ).toBeInTheDocument();
  }
}
export const testCase840: Story = {
  args: {
    tasks: ["偌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偌`)
    ).toBeInTheDocument();
  }
}
export const testCase841: Story = {
  args: {
    tasks: ["偍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偍`)
    ).toBeInTheDocument();
  }
}
export const testCase842: Story = {
  args: {
    tasks: ["偎"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偎`)
    ).toBeInTheDocument();
  }
}
export const testCase843: Story = {
  args: {
    tasks: ["偏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偏`)
    ).toBeInTheDocument();
  }
}
export const testCase844: Story = {
  args: {
    tasks: ["偐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偐`)
    ).toBeInTheDocument();
  }
}
export const testCase845: Story = {
  args: {
    tasks: ["偑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偑`)
    ).toBeInTheDocument();
  }
}
export const testCase846: Story = {
  args: {
    tasks: ["偒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偒`)
    ).toBeInTheDocument();
  }
}
export const testCase847: Story = {
  args: {
    tasks: ["偓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偓`)
    ).toBeInTheDocument();
  }
}
export const testCase848: Story = {
  args: {
    tasks: ["偔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偔`)
    ).toBeInTheDocument();
  }
}
export const testCase849: Story = {
  args: {
    tasks: ["偕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偕`)
    ).toBeInTheDocument();
  }
}
export const testCase850: Story = {
  args: {
    tasks: ["偖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偖`)
    ).toBeInTheDocument();
  }
}
export const testCase851: Story = {
  args: {
    tasks: ["偗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偗`)
    ).toBeInTheDocument();
  }
}
export const testCase852: Story = {
  args: {
    tasks: ["偘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偘`)
    ).toBeInTheDocument();
  }
}
export const testCase853: Story = {
  args: {
    tasks: ["偙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偙`)
    ).toBeInTheDocument();
  }
}
export const testCase854: Story = {
  args: {
    tasks: ["做"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 做`)
    ).toBeInTheDocument();
  }
}
export const testCase855: Story = {
  args: {
    tasks: ["偛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偛`)
    ).toBeInTheDocument();
  }
}
export const testCase856: Story = {
  args: {
    tasks: ["停"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 停`)
    ).toBeInTheDocument();
  }
}
export const testCase857: Story = {
  args: {
    tasks: ["偝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偝`)
    ).toBeInTheDocument();
  }
}
export const testCase858: Story = {
  args: {
    tasks: ["偞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偞`)
    ).toBeInTheDocument();
  }
}
export const testCase859: Story = {
  args: {
    tasks: ["偟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偟`)
    ).toBeInTheDocument();
  }
}
export const testCase860: Story = {
  args: {
    tasks: ["偠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偠`)
    ).toBeInTheDocument();
  }
}
export const testCase861: Story = {
  args: {
    tasks: ["偡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偡`)
    ).toBeInTheDocument();
  }
}
export const testCase862: Story = {
  args: {
    tasks: ["偢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偢`)
    ).toBeInTheDocument();
  }
}
export const testCase863: Story = {
  args: {
    tasks: ["偣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偣`)
    ).toBeInTheDocument();
  }
}
export const testCase864: Story = {
  args: {
    tasks: ["偤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偤`)
    ).toBeInTheDocument();
  }
}
export const testCase865: Story = {
  args: {
    tasks: ["健"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 健`)
    ).toBeInTheDocument();
  }
}
export const testCase866: Story = {
  args: {
    tasks: ["偦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偦`)
    ).toBeInTheDocument();
  }
}
export const testCase867: Story = {
  args: {
    tasks: ["偧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偧`)
    ).toBeInTheDocument();
  }
}
export const testCase868: Story = {
  args: {
    tasks: ["偨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偨`)
    ).toBeInTheDocument();
  }
}
export const testCase869: Story = {
  args: {
    tasks: ["偩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偩`)
    ).toBeInTheDocument();
  }
}
export const testCase870: Story = {
  args: {
    tasks: ["偪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偪`)
    ).toBeInTheDocument();
  }
}
export const testCase871: Story = {
  args: {
    tasks: ["偫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偫`)
    ).toBeInTheDocument();
  }
}
export const testCase872: Story = {
  args: {
    tasks: ["偬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偬`)
    ).toBeInTheDocument();
  }
}
export const testCase873: Story = {
  args: {
    tasks: ["偭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偭`)
    ).toBeInTheDocument();
  }
}
export const testCase874: Story = {
  args: {
    tasks: ["偮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偮`)
    ).toBeInTheDocument();
  }
}
export const testCase875: Story = {
  args: {
    tasks: ["偯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偯`)
    ).toBeInTheDocument();
  }
}
export const testCase876: Story = {
  args: {
    tasks: ["偰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偰`)
    ).toBeInTheDocument();
  }
}
export const testCase877: Story = {
  args: {
    tasks: ["偱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偱`)
    ).toBeInTheDocument();
  }
}
export const testCase878: Story = {
  args: {
    tasks: ["偲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偲`)
    ).toBeInTheDocument();
  }
}
export const testCase879: Story = {
  args: {
    tasks: ["偳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偳`)
    ).toBeInTheDocument();
  }
}
export const testCase880: Story = {
  args: {
    tasks: ["側"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 側`)
    ).toBeInTheDocument();
  }
}
export const testCase881: Story = {
  args: {
    tasks: ["偵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偵`)
    ).toBeInTheDocument();
  }
}
export const testCase882: Story = {
  args: {
    tasks: ["偶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偶`)
    ).toBeInTheDocument();
  }
}
export const testCase883: Story = {
  args: {
    tasks: ["偷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偷`)
    ).toBeInTheDocument();
  }
}
export const testCase884: Story = {
  args: {
    tasks: ["偸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偸`)
    ).toBeInTheDocument();
  }
}
export const testCase885: Story = {
  args: {
    tasks: ["偹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偹`)
    ).toBeInTheDocument();
  }
}
export const testCase886: Story = {
  args: {
    tasks: ["偺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偺`)
    ).toBeInTheDocument();
  }
}
export const testCase887: Story = {
  args: {
    tasks: ["偻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偻`)
    ).toBeInTheDocument();
  }
}
export const testCase888: Story = {
  args: {
    tasks: ["偼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偼`)
    ).toBeInTheDocument();
  }
}
export const testCase889: Story = {
  args: {
    tasks: ["偽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偽`)
    ).toBeInTheDocument();
  }
}
export const testCase890: Story = {
  args: {
    tasks: ["偾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偾`)
    ).toBeInTheDocument();
  }
}
export const testCase891: Story = {
  args: {
    tasks: ["偿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 偿`)
    ).toBeInTheDocument();
  }
}
export const testCase892: Story = {
  args: {
    tasks: ["傀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傀`)
    ).toBeInTheDocument();
  }
}
export const testCase893: Story = {
  args: {
    tasks: ["傁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傁`)
    ).toBeInTheDocument();
  }
}
export const testCase894: Story = {
  args: {
    tasks: ["傂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傂`)
    ).toBeInTheDocument();
  }
}
export const testCase895: Story = {
  args: {
    tasks: ["傃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傃`)
    ).toBeInTheDocument();
  }
}
export const testCase896: Story = {
  args: {
    tasks: ["傄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傄`)
    ).toBeInTheDocument();
  }
}
export const testCase897: Story = {
  args: {
    tasks: ["傅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傅`)
    ).toBeInTheDocument();
  }
}
export const testCase898: Story = {
  args: {
    tasks: ["傆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傆`)
    ).toBeInTheDocument();
  }
}
export const testCase899: Story = {
  args: {
    tasks: ["傇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傇`)
    ).toBeInTheDocument();
  }
}
export const testCase900: Story = {
  args: {
    tasks: ["傈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傈`)
    ).toBeInTheDocument();
  }
}
export const testCase901: Story = {
  args: {
    tasks: ["傉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傉`)
    ).toBeInTheDocument();
  }
}
export const testCase902: Story = {
  args: {
    tasks: ["傊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傊`)
    ).toBeInTheDocument();
  }
}
export const testCase903: Story = {
  args: {
    tasks: ["傋"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傋`)
    ).toBeInTheDocument();
  }
}
export const testCase904: Story = {
  args: {
    tasks: ["傌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傌`)
    ).toBeInTheDocument();
  }
}
export const testCase905: Story = {
  args: {
    tasks: ["傍"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傍`)
    ).toBeInTheDocument();
  }
}
export const testCase906: Story = {
  args: {
    tasks: ["傎"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傎`)
    ).toBeInTheDocument();
  }
}
export const testCase907: Story = {
  args: {
    tasks: ["傏"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傏`)
    ).toBeInTheDocument();
  }
}
export const testCase908: Story = {
  args: {
    tasks: ["傐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傐`)
    ).toBeInTheDocument();
  }
}
export const testCase909: Story = {
  args: {
    tasks: ["傑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傑`)
    ).toBeInTheDocument();
  }
}
export const testCase910: Story = {
  args: {
    tasks: ["傒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傒`)
    ).toBeInTheDocument();
  }
}
export const testCase911: Story = {
  args: {
    tasks: ["傓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傓`)
    ).toBeInTheDocument();
  }
}
export const testCase912: Story = {
  args: {
    tasks: ["傔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傔`)
    ).toBeInTheDocument();
  }
}
export const testCase913: Story = {
  args: {
    tasks: ["傕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傕`)
    ).toBeInTheDocument();
  }
}
export const testCase914: Story = {
  args: {
    tasks: ["傖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傖`)
    ).toBeInTheDocument();
  }
}
export const testCase915: Story = {
  args: {
    tasks: ["傗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傗`)
    ).toBeInTheDocument();
  }
}
export const testCase916: Story = {
  args: {
    tasks: ["傘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傘`)
    ).toBeInTheDocument();
  }
}
export const testCase917: Story = {
  args: {
    tasks: ["備"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 備`)
    ).toBeInTheDocument();
  }
}
export const testCase918: Story = {
  args: {
    tasks: ["傚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傚`)
    ).toBeInTheDocument();
  }
}
export const testCase919: Story = {
  args: {
    tasks: ["傛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傛`)
    ).toBeInTheDocument();
  }
}
export const testCase920: Story = {
  args: {
    tasks: ["傜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傜`)
    ).toBeInTheDocument();
  }
}
export const testCase921: Story = {
  args: {
    tasks: ["傝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傝`)
    ).toBeInTheDocument();
  }
}
export const testCase922: Story = {
  args: {
    tasks: ["傞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傞`)
    ).toBeInTheDocument();
  }
}
export const testCase923: Story = {
  args: {
    tasks: ["傟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傟`)
    ).toBeInTheDocument();
  }
}
export const testCase924: Story = {
  args: {
    tasks: ["傠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傠`)
    ).toBeInTheDocument();
  }
}
export const testCase925: Story = {
  args: {
    tasks: ["傡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傡`)
    ).toBeInTheDocument();
  }
}
export const testCase926: Story = {
  args: {
    tasks: ["傢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傢`)
    ).toBeInTheDocument();
  }
}
export const testCase927: Story = {
  args: {
    tasks: ["傣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傣`)
    ).toBeInTheDocument();
  }
}
export const testCase928: Story = {
  args: {
    tasks: ["傤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傤`)
    ).toBeInTheDocument();
  }
}
export const testCase929: Story = {
  args: {
    tasks: ["傥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傥`)
    ).toBeInTheDocument();
  }
}
export const testCase930: Story = {
  args: {
    tasks: ["傦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傦`)
    ).toBeInTheDocument();
  }
}
export const testCase931: Story = {
  args: {
    tasks: ["傧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傧`)
    ).toBeInTheDocument();
  }
}
export const testCase932: Story = {
  args: {
    tasks: ["储"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 储`)
    ).toBeInTheDocument();
  }
}
export const testCase933: Story = {
  args: {
    tasks: ["傩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傩`)
    ).toBeInTheDocument();
  }
}
export const testCase934: Story = {
  args: {
    tasks: ["傪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傪`)
    ).toBeInTheDocument();
  }
}
export const testCase935: Story = {
  args: {
    tasks: ["傫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傫`)
    ).toBeInTheDocument();
  }
}
export const testCase936: Story = {
  args: {
    tasks: ["催"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 催`)
    ).toBeInTheDocument();
  }
}
export const testCase937: Story = {
  args: {
    tasks: ["傭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傭`)
    ).toBeInTheDocument();
  }
}
export const testCase938: Story = {
  args: {
    tasks: ["傮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傮`)
    ).toBeInTheDocument();
  }
}
export const testCase939: Story = {
  args: {
    tasks: ["傯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傯`)
    ).toBeInTheDocument();
  }
}
export const testCase940: Story = {
  args: {
    tasks: ["傰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傰`)
    ).toBeInTheDocument();
  }
}
export const testCase941: Story = {
  args: {
    tasks: ["傱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傱`)
    ).toBeInTheDocument();
  }
}
export const testCase942: Story = {
  args: {
    tasks: ["傲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傲`)
    ).toBeInTheDocument();
  }
}
export const testCase943: Story = {
  args: {
    tasks: ["傳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傳`)
    ).toBeInTheDocument();
  }
}
export const testCase944: Story = {
  args: {
    tasks: ["傴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傴`)
    ).toBeInTheDocument();
  }
}
export const testCase945: Story = {
  args: {
    tasks: ["債"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 債`)
    ).toBeInTheDocument();
  }
}
export const testCase946: Story = {
  args: {
    tasks: ["傶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傶`)
    ).toBeInTheDocument();
  }
}
export const testCase947: Story = {
  args: {
    tasks: ["傷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傷`)
    ).toBeInTheDocument();
  }
}
export const testCase948: Story = {
  args: {
    tasks: ["傸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傸`)
    ).toBeInTheDocument();
  }
}
export const testCase949: Story = {
  args: {
    tasks: ["傹"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傹`)
    ).toBeInTheDocument();
  }
}
export const testCase950: Story = {
  args: {
    tasks: ["傺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傺`)
    ).toBeInTheDocument();
  }
}
export const testCase951: Story = {
  args: {
    tasks: ["傻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傻`)
    ).toBeInTheDocument();
  }
}
export const testCase952: Story = {
  args: {
    tasks: ["傼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傼`)
    ).toBeInTheDocument();
  }
}
export const testCase953: Story = {
  args: {
    tasks: ["傽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傽`)
    ).toBeInTheDocument();
  }
}
export const testCase954: Story = {
  args: {
    tasks: ["傾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傾`)
    ).toBeInTheDocument();
  }
}
export const testCase955: Story = {
  args: {
    tasks: ["傿"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 傿`)
    ).toBeInTheDocument();
  }
}
export const testCase956: Story = {
  args: {
    tasks: ["僀"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僀`)
    ).toBeInTheDocument();
  }
}
export const testCase957: Story = {
  args: {
    tasks: ["僁"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僁`)
    ).toBeInTheDocument();
  }
}
export const testCase958: Story = {
  args: {
    tasks: ["僂"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僂`)
    ).toBeInTheDocument();
  }
}
export const testCase959: Story = {
  args: {
    tasks: ["僃"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僃`)
    ).toBeInTheDocument();
  }
}
export const testCase960: Story = {
  args: {
    tasks: ["僄"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僄`)
    ).toBeInTheDocument();
  }
}
export const testCase961: Story = {
  args: {
    tasks: ["僅"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僅`)
    ).toBeInTheDocument();
  }
}
export const testCase962: Story = {
  args: {
    tasks: ["僆"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僆`)
    ).toBeInTheDocument();
  }
}
export const testCase963: Story = {
  args: {
    tasks: ["僇"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僇`)
    ).toBeInTheDocument();
  }
}
export const testCase964: Story = {
  args: {
    tasks: ["僈"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僈`)
    ).toBeInTheDocument();
  }
}
export const testCase965: Story = {
  args: {
    tasks: ["僉"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僉`)
    ).toBeInTheDocument();
  }
}
export const testCase966: Story = {
  args: {
    tasks: ["僊"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僊`)
    ).toBeInTheDocument();
  }
}
export const testCase967: Story = {
  args: {
    tasks: ["僋"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僋`)
    ).toBeInTheDocument();
  }
}
export const testCase968: Story = {
  args: {
    tasks: ["僌"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僌`)
    ).toBeInTheDocument();
  }
}
export const testCase969: Story = {
  args: {
    tasks: ["働"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 働`)
    ).toBeInTheDocument();
  }
}
export const testCase970: Story = {
  args: {
    tasks: ["僎"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僎`)
    ).toBeInTheDocument();
  }
}
export const testCase971: Story = {
  args: {
    tasks: ["像"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 像`)
    ).toBeInTheDocument();
  }
}
export const testCase972: Story = {
  args: {
    tasks: ["僐"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僐`)
    ).toBeInTheDocument();
  }
}
export const testCase973: Story = {
  args: {
    tasks: ["僑"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僑`)
    ).toBeInTheDocument();
  }
}
export const testCase974: Story = {
  args: {
    tasks: ["僒"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僒`)
    ).toBeInTheDocument();
  }
}
export const testCase975: Story = {
  args: {
    tasks: ["僓"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僓`)
    ).toBeInTheDocument();
  }
}
export const testCase976: Story = {
  args: {
    tasks: ["僔"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僔`)
    ).toBeInTheDocument();
  }
}
export const testCase977: Story = {
  args: {
    tasks: ["僕"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僕`)
    ).toBeInTheDocument();
  }
}
export const testCase978: Story = {
  args: {
    tasks: ["僖"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僖`)
    ).toBeInTheDocument();
  }
}
export const testCase979: Story = {
  args: {
    tasks: ["僗"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僗`)
    ).toBeInTheDocument();
  }
}
export const testCase980: Story = {
  args: {
    tasks: ["僘"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僘`)
    ).toBeInTheDocument();
  }
}
export const testCase981: Story = {
  args: {
    tasks: ["僙"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僙`)
    ).toBeInTheDocument();
  }
}
export const testCase982: Story = {
  args: {
    tasks: ["僚"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僚`)
    ).toBeInTheDocument();
  }
}
export const testCase983: Story = {
  args: {
    tasks: ["僛"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僛`)
    ).toBeInTheDocument();
  }
}
export const testCase984: Story = {
  args: {
    tasks: ["僜"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僜`)
    ).toBeInTheDocument();
  }
}
export const testCase985: Story = {
  args: {
    tasks: ["僝"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僝`)
    ).toBeInTheDocument();
  }
}
export const testCase986: Story = {
  args: {
    tasks: ["僞"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僞`)
    ).toBeInTheDocument();
  }
}
export const testCase987: Story = {
  args: {
    tasks: ["僟"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僟`)
    ).toBeInTheDocument();
  }
}
export const testCase988: Story = {
  args: {
    tasks: ["僠"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僠`)
    ).toBeInTheDocument();
  }
}
export const testCase989: Story = {
  args: {
    tasks: ["僡"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僡`)
    ).toBeInTheDocument();
  }
}
export const testCase990: Story = {
  args: {
    tasks: ["僢"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僢`)
    ).toBeInTheDocument();
  }
}
export const testCase991: Story = {
  args: {
    tasks: ["僣"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僣`)
    ).toBeInTheDocument();
  }
}
export const testCase992: Story = {
  args: {
    tasks: ["僤"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僤`)
    ).toBeInTheDocument();
  }
}
export const testCase993: Story = {
  args: {
    tasks: ["僥"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僥`)
    ).toBeInTheDocument();
  }
}
export const testCase994: Story = {
  args: {
    tasks: ["僦"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僦`)
    ).toBeInTheDocument();
  }
}
export const testCase995: Story = {
  args: {
    tasks: ["僧"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僧`)
    ).toBeInTheDocument();
  }
}
export const testCase996: Story = {
  args: {
    tasks: ["僨"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僨`)
    ).toBeInTheDocument();
  }
}
export const testCase997: Story = {
  args: {
    tasks: ["僩"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僩`)
    ).toBeInTheDocument();
  }
}
export const testCase998: Story = {
  args: {
    tasks: ["僪"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僪`)
    ).toBeInTheDocument();
  }
}
export const testCase999: Story = {
  args: {
    tasks: ["僫"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僫`)
    ).toBeInTheDocument();
  }
}
export const testCase1000: Story = {
  args: {
    tasks: ["僬"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僬`)
    ).toBeInTheDocument();
  }
}
export const testCase1001: Story = {
  args: {
    tasks: ["僭"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僭`)
    ).toBeInTheDocument();
  }
}
export const testCase1002: Story = {
  args: {
    tasks: ["僮"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僮`)
    ).toBeInTheDocument();
  }
}
export const testCase1003: Story = {
  args: {
    tasks: ["僯"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僯`)
    ).toBeInTheDocument();
  }
}
export const testCase1004: Story = {
  args: {
    tasks: ["僰"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僰`)
    ).toBeInTheDocument();
  }
}
export const testCase1005: Story = {
  args: {
    tasks: ["僱"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僱`)
    ).toBeInTheDocument();
  }
}
export const testCase1006: Story = {
  args: {
    tasks: ["僲"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僲`)
    ).toBeInTheDocument();
  }
}
export const testCase1007: Story = {
  args: {
    tasks: ["僳"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僳`)
    ).toBeInTheDocument();
  }
}
export const testCase1008: Story = {
  args: {
    tasks: ["僴"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僴`)
    ).toBeInTheDocument();
  }
}
export const testCase1009: Story = {
  args: {
    tasks: ["僵"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僵`)
    ).toBeInTheDocument();
  }
}
export const testCase1010: Story = {
  args: {
    tasks: ["僶"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僶`)
    ).toBeInTheDocument();
  }
}
export const testCase1011: Story = {
  args: {
    tasks: ["僷"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僷`)
    ).toBeInTheDocument();
  }
}
export const testCase1012: Story = {
  args: {
    tasks: ["僸"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僸`)
    ).toBeInTheDocument();
  }
}
export const testCase1013: Story = {
  args: {
    tasks: ["價"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 價`)
    ).toBeInTheDocument();
  }
}
export const testCase1014: Story = {
  args: {
    tasks: ["僺"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僺`)
    ).toBeInTheDocument();
  }
}
export const testCase1015: Story = {
  args: {
    tasks: ["僻"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僻`)
    ).toBeInTheDocument();
  }
}
export const testCase1016: Story = {
  args: {
    tasks: ["僼"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僼`)
    ).toBeInTheDocument();
  }
}
export const testCase1017: Story = {
  args: {
    tasks: ["僽"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僽`)
    ).toBeInTheDocument();
  }
}
export const testCase1018: Story = {
  args: {
    tasks: ["僾"]
  },
  play: async ({ canvasElement }) => {
    await expect(
      within(canvasElement).getByText(`0 僾`)
    ).toBeInTheDocument();
  }
}
