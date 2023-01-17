import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { TaskList } from './TaskList';

const Template: ComponentStory<typeof TaskList> = (args) => <TaskList {...args} />;

export default {
    title: 'Example/TaskList',
    component: TaskList,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    }, 
} as ComponentMeta<typeof TaskList>

export const testCase0 = Template.bind({});
testCase0.args = {
  tasks: ["、"]
};
testCase0.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 、`)
  ).toBeInTheDocument();
};
export const testCase1 = Template.bind({});
testCase1.args = {
  tasks: ["。"]
};
testCase1.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 。`)
  ).toBeInTheDocument();
};
export const testCase2 = Template.bind({});
testCase2.args = {
  tasks: ["〃"]
};
testCase2.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〃`)
  ).toBeInTheDocument();
};
export const testCase3 = Template.bind({});
testCase3.args = {
  tasks: ["〄"]
};
testCase3.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〄`)
  ).toBeInTheDocument();
};
export const testCase4 = Template.bind({});
testCase4.args = {
  tasks: ["々"]
};
testCase4.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 々`)
  ).toBeInTheDocument();
};
export const testCase5 = Template.bind({});
testCase5.args = {
  tasks: ["〆"]
};
testCase5.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〆`)
  ).toBeInTheDocument();
};
export const testCase6 = Template.bind({});
testCase6.args = {
  tasks: ["〇"]
};
testCase6.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〇`)
  ).toBeInTheDocument();
};
export const testCase7 = Template.bind({});
testCase7.args = {
  tasks: ["〈"]
};
testCase7.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〈`)
  ).toBeInTheDocument();
};
export const testCase8 = Template.bind({});
testCase8.args = {
  tasks: ["〉"]
};
testCase8.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〉`)
  ).toBeInTheDocument();
};
export const testCase9 = Template.bind({});
testCase9.args = {
  tasks: ["《"]
};
testCase9.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 《`)
  ).toBeInTheDocument();
};
export const testCase10 = Template.bind({});
testCase10.args = {
  tasks: ["》"]
};
testCase10.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 》`)
  ).toBeInTheDocument();
};
export const testCase11 = Template.bind({});
testCase11.args = {
  tasks: ["「"]
};
testCase11.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 「`)
  ).toBeInTheDocument();
};
export const testCase12 = Template.bind({});
testCase12.args = {
  tasks: ["」"]
};
testCase12.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 」`)
  ).toBeInTheDocument();
};
export const testCase13 = Template.bind({});
testCase13.args = {
  tasks: ["『"]
};
testCase13.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 『`)
  ).toBeInTheDocument();
};
export const testCase14 = Template.bind({});
testCase14.args = {
  tasks: ["』"]
};
testCase14.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 』`)
  ).toBeInTheDocument();
};
export const testCase15 = Template.bind({});
testCase15.args = {
  tasks: ["【"]
};
testCase15.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 【`)
  ).toBeInTheDocument();
};
export const testCase16 = Template.bind({});
testCase16.args = {
  tasks: ["】"]
};
testCase16.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 】`)
  ).toBeInTheDocument();
};
export const testCase17 = Template.bind({});
testCase17.args = {
  tasks: ["〒"]
};
testCase17.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〒`)
  ).toBeInTheDocument();
};
export const testCase18 = Template.bind({});
testCase18.args = {
  tasks: ["〓"]
};
testCase18.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〓`)
  ).toBeInTheDocument();
};
export const testCase19 = Template.bind({});
testCase19.args = {
  tasks: ["〔"]
};
testCase19.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〔`)
  ).toBeInTheDocument();
};
export const testCase20 = Template.bind({});
testCase20.args = {
  tasks: ["〕"]
};
testCase20.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〕`)
  ).toBeInTheDocument();
};
export const testCase21 = Template.bind({});
testCase21.args = {
  tasks: ["〖"]
};
testCase21.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〖`)
  ).toBeInTheDocument();
};
export const testCase22 = Template.bind({});
testCase22.args = {
  tasks: ["〗"]
};
testCase22.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〗`)
  ).toBeInTheDocument();
};
export const testCase23 = Template.bind({});
testCase23.args = {
  tasks: ["〘"]
};
testCase23.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〘`)
  ).toBeInTheDocument();
};
export const testCase24 = Template.bind({});
testCase24.args = {
  tasks: ["〙"]
};
testCase24.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〙`)
  ).toBeInTheDocument();
};
export const testCase25 = Template.bind({});
testCase25.args = {
  tasks: ["〚"]
};
testCase25.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〚`)
  ).toBeInTheDocument();
};
export const testCase26 = Template.bind({});
testCase26.args = {
  tasks: ["〛"]
};
testCase26.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〛`)
  ).toBeInTheDocument();
};
export const testCase27 = Template.bind({});
testCase27.args = {
  tasks: ["〜"]
};
testCase27.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〜`)
  ).toBeInTheDocument();
};
export const testCase28 = Template.bind({});
testCase28.args = {
  tasks: ["〝"]
};
testCase28.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〝`)
  ).toBeInTheDocument();
};
export const testCase29 = Template.bind({});
testCase29.args = {
  tasks: ["〞"]
};
testCase29.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〞`)
  ).toBeInTheDocument();
};
export const testCase30 = Template.bind({});
testCase30.args = {
  tasks: ["〟"]
};
testCase30.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〟`)
  ).toBeInTheDocument();
};
export const testCase31 = Template.bind({});
testCase31.args = {
  tasks: ["〠"]
};
testCase31.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〠`)
  ).toBeInTheDocument();
};
export const testCase32 = Template.bind({});
testCase32.args = {
  tasks: ["〡"]
};
testCase32.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〡`)
  ).toBeInTheDocument();
};
export const testCase33 = Template.bind({});
testCase33.args = {
  tasks: ["〢"]
};
testCase33.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〢`)
  ).toBeInTheDocument();
};
export const testCase34 = Template.bind({});
testCase34.args = {
  tasks: ["〣"]
};
testCase34.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〣`)
  ).toBeInTheDocument();
};
export const testCase35 = Template.bind({});
testCase35.args = {
  tasks: ["〤"]
};
testCase35.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〤`)
  ).toBeInTheDocument();
};
export const testCase36 = Template.bind({});
testCase36.args = {
  tasks: ["〥"]
};
testCase36.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〥`)
  ).toBeInTheDocument();
};
export const testCase37 = Template.bind({});
testCase37.args = {
  tasks: ["〦"]
};
testCase37.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〦`)
  ).toBeInTheDocument();
};
export const testCase38 = Template.bind({});
testCase38.args = {
  tasks: ["〧"]
};
testCase38.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〧`)
  ).toBeInTheDocument();
};
export const testCase39 = Template.bind({});
testCase39.args = {
  tasks: ["〨"]
};
testCase39.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〨`)
  ).toBeInTheDocument();
};
export const testCase40 = Template.bind({});
testCase40.args = {
  tasks: ["〩"]
};
testCase40.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〩`)
  ).toBeInTheDocument();
};
export const testCase41 = Template.bind({});
testCase41.args = {
  tasks: ["〪"]
};
testCase41.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〪`)
  ).toBeInTheDocument();
};
export const testCase42 = Template.bind({});
testCase42.args = {
  tasks: ["〫"]
};
testCase42.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〫`)
  ).toBeInTheDocument();
};
export const testCase43 = Template.bind({});
testCase43.args = {
  tasks: ["〬"]
};
testCase43.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〬`)
  ).toBeInTheDocument();
};
export const testCase44 = Template.bind({});
testCase44.args = {
  tasks: ["〭"]
};
testCase44.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〭`)
  ).toBeInTheDocument();
};
export const testCase45 = Template.bind({});
testCase45.args = {
  tasks: ["〮"]
};
testCase45.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〮`)
  ).toBeInTheDocument();
};
export const testCase46 = Template.bind({});
testCase46.args = {
  tasks: ["〯"]
};
testCase46.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〯`)
  ).toBeInTheDocument();
};
export const testCase47 = Template.bind({});
testCase47.args = {
  tasks: ["〰"]
};
testCase47.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〰`)
  ).toBeInTheDocument();
};
export const testCase48 = Template.bind({});
testCase48.args = {
  tasks: ["〱"]
};
testCase48.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〱`)
  ).toBeInTheDocument();
};
export const testCase49 = Template.bind({});
testCase49.args = {
  tasks: ["〲"]
};
testCase49.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〲`)
  ).toBeInTheDocument();
};
export const testCase50 = Template.bind({});
testCase50.args = {
  tasks: ["〳"]
};
testCase50.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〳`)
  ).toBeInTheDocument();
};
export const testCase51 = Template.bind({});
testCase51.args = {
  tasks: ["〴"]
};
testCase51.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〴`)
  ).toBeInTheDocument();
};
export const testCase52 = Template.bind({});
testCase52.args = {
  tasks: ["〵"]
};
testCase52.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〵`)
  ).toBeInTheDocument();
};
export const testCase53 = Template.bind({});
testCase53.args = {
  tasks: ["〶"]
};
testCase53.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〶`)
  ).toBeInTheDocument();
};
export const testCase54 = Template.bind({});
testCase54.args = {
  tasks: ["〷"]
};
testCase54.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〷`)
  ).toBeInTheDocument();
};
export const testCase55 = Template.bind({});
testCase55.args = {
  tasks: ["〸"]
};
testCase55.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〸`)
  ).toBeInTheDocument();
};
export const testCase56 = Template.bind({});
testCase56.args = {
  tasks: ["〹"]
};
testCase56.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〹`)
  ).toBeInTheDocument();
};
export const testCase57 = Template.bind({});
testCase57.args = {
  tasks: ["〺"]
};
testCase57.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〺`)
  ).toBeInTheDocument();
};
export const testCase58 = Template.bind({});
testCase58.args = {
  tasks: ["〻"]
};
testCase58.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〻`)
  ).toBeInTheDocument();
};
export const testCase59 = Template.bind({});
testCase59.args = {
  tasks: ["〼"]
};
testCase59.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〼`)
  ).toBeInTheDocument();
};
export const testCase60 = Template.bind({});
testCase60.args = {
  tasks: ["〽"]
};
testCase60.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〽`)
  ).toBeInTheDocument();
};
export const testCase61 = Template.bind({});
testCase61.args = {
  tasks: ["〾"]
};
testCase61.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 〾`)
  ).toBeInTheDocument();
};
export const testCase62 = Template.bind({});
testCase62.args = {
  tasks: ["぀"]
};
testCase62.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぀`)
  ).toBeInTheDocument();
};
export const testCase63 = Template.bind({});
testCase63.args = {
  tasks: ["ぁ"]
};
testCase63.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぁ`)
  ).toBeInTheDocument();
};
export const testCase64 = Template.bind({});
testCase64.args = {
  tasks: ["あ"]
};
testCase64.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 あ`)
  ).toBeInTheDocument();
};
export const testCase65 = Template.bind({});
testCase65.args = {
  tasks: ["ぃ"]
};
testCase65.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぃ`)
  ).toBeInTheDocument();
};
export const testCase66 = Template.bind({});
testCase66.args = {
  tasks: ["い"]
};
testCase66.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 い`)
  ).toBeInTheDocument();
};
export const testCase67 = Template.bind({});
testCase67.args = {
  tasks: ["ぅ"]
};
testCase67.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぅ`)
  ).toBeInTheDocument();
};
export const testCase68 = Template.bind({});
testCase68.args = {
  tasks: ["う"]
};
testCase68.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 う`)
  ).toBeInTheDocument();
};
export const testCase69 = Template.bind({});
testCase69.args = {
  tasks: ["ぇ"]
};
testCase69.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぇ`)
  ).toBeInTheDocument();
};
export const testCase70 = Template.bind({});
testCase70.args = {
  tasks: ["え"]
};
testCase70.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 え`)
  ).toBeInTheDocument();
};
export const testCase71 = Template.bind({});
testCase71.args = {
  tasks: ["ぉ"]
};
testCase71.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぉ`)
  ).toBeInTheDocument();
};
export const testCase72 = Template.bind({});
testCase72.args = {
  tasks: ["お"]
};
testCase72.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 お`)
  ).toBeInTheDocument();
};
export const testCase73 = Template.bind({});
testCase73.args = {
  tasks: ["か"]
};
testCase73.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 か`)
  ).toBeInTheDocument();
};
export const testCase74 = Template.bind({});
testCase74.args = {
  tasks: ["が"]
};
testCase74.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 が`)
  ).toBeInTheDocument();
};
export const testCase75 = Template.bind({});
testCase75.args = {
  tasks: ["き"]
};
testCase75.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 き`)
  ).toBeInTheDocument();
};
export const testCase76 = Template.bind({});
testCase76.args = {
  tasks: ["ぎ"]
};
testCase76.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぎ`)
  ).toBeInTheDocument();
};
export const testCase77 = Template.bind({});
testCase77.args = {
  tasks: ["く"]
};
testCase77.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 く`)
  ).toBeInTheDocument();
};
export const testCase78 = Template.bind({});
testCase78.args = {
  tasks: ["ぐ"]
};
testCase78.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぐ`)
  ).toBeInTheDocument();
};
export const testCase79 = Template.bind({});
testCase79.args = {
  tasks: ["け"]
};
testCase79.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 け`)
  ).toBeInTheDocument();
};
export const testCase80 = Template.bind({});
testCase80.args = {
  tasks: ["げ"]
};
testCase80.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 げ`)
  ).toBeInTheDocument();
};
export const testCase81 = Template.bind({});
testCase81.args = {
  tasks: ["こ"]
};
testCase81.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 こ`)
  ).toBeInTheDocument();
};
export const testCase82 = Template.bind({});
testCase82.args = {
  tasks: ["ご"]
};
testCase82.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ご`)
  ).toBeInTheDocument();
};
export const testCase83 = Template.bind({});
testCase83.args = {
  tasks: ["さ"]
};
testCase83.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 さ`)
  ).toBeInTheDocument();
};
export const testCase84 = Template.bind({});
testCase84.args = {
  tasks: ["ざ"]
};
testCase84.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ざ`)
  ).toBeInTheDocument();
};
export const testCase85 = Template.bind({});
testCase85.args = {
  tasks: ["し"]
};
testCase85.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 し`)
  ).toBeInTheDocument();
};
export const testCase86 = Template.bind({});
testCase86.args = {
  tasks: ["じ"]
};
testCase86.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 じ`)
  ).toBeInTheDocument();
};
export const testCase87 = Template.bind({});
testCase87.args = {
  tasks: ["す"]
};
testCase87.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 す`)
  ).toBeInTheDocument();
};
export const testCase88 = Template.bind({});
testCase88.args = {
  tasks: ["ず"]
};
testCase88.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ず`)
  ).toBeInTheDocument();
};
export const testCase89 = Template.bind({});
testCase89.args = {
  tasks: ["せ"]
};
testCase89.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 せ`)
  ).toBeInTheDocument();
};
export const testCase90 = Template.bind({});
testCase90.args = {
  tasks: ["ぜ"]
};
testCase90.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぜ`)
  ).toBeInTheDocument();
};
export const testCase91 = Template.bind({});
testCase91.args = {
  tasks: ["そ"]
};
testCase91.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 そ`)
  ).toBeInTheDocument();
};
export const testCase92 = Template.bind({});
testCase92.args = {
  tasks: ["ぞ"]
};
testCase92.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぞ`)
  ).toBeInTheDocument();
};
export const testCase93 = Template.bind({});
testCase93.args = {
  tasks: ["た"]
};
testCase93.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 た`)
  ).toBeInTheDocument();
};
export const testCase94 = Template.bind({});
testCase94.args = {
  tasks: ["だ"]
};
testCase94.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 だ`)
  ).toBeInTheDocument();
};
export const testCase95 = Template.bind({});
testCase95.args = {
  tasks: ["ち"]
};
testCase95.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ち`)
  ).toBeInTheDocument();
};
export const testCase96 = Template.bind({});
testCase96.args = {
  tasks: ["ぢ"]
};
testCase96.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぢ`)
  ).toBeInTheDocument();
};
export const testCase97 = Template.bind({});
testCase97.args = {
  tasks: ["っ"]
};
testCase97.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 っ`)
  ).toBeInTheDocument();
};
export const testCase98 = Template.bind({});
testCase98.args = {
  tasks: ["つ"]
};
testCase98.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 つ`)
  ).toBeInTheDocument();
};
export const testCase99 = Template.bind({});
testCase99.args = {
  tasks: ["づ"]
};
testCase99.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 づ`)
  ).toBeInTheDocument();
};
export const testCase100 = Template.bind({});
testCase100.args = {
  tasks: ["て"]
};
testCase100.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 て`)
  ).toBeInTheDocument();
};
export const testCase101 = Template.bind({});
testCase101.args = {
  tasks: ["で"]
};
testCase101.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 で`)
  ).toBeInTheDocument();
};
export const testCase102 = Template.bind({});
testCase102.args = {
  tasks: ["と"]
};
testCase102.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 と`)
  ).toBeInTheDocument();
};
export const testCase103 = Template.bind({});
testCase103.args = {
  tasks: ["ど"]
};
testCase103.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ど`)
  ).toBeInTheDocument();
};
export const testCase104 = Template.bind({});
testCase104.args = {
  tasks: ["な"]
};
testCase104.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 な`)
  ).toBeInTheDocument();
};
export const testCase105 = Template.bind({});
testCase105.args = {
  tasks: ["に"]
};
testCase105.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 に`)
  ).toBeInTheDocument();
};
export const testCase106 = Template.bind({});
testCase106.args = {
  tasks: ["ぬ"]
};
testCase106.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぬ`)
  ).toBeInTheDocument();
};
export const testCase107 = Template.bind({});
testCase107.args = {
  tasks: ["ね"]
};
testCase107.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ね`)
  ).toBeInTheDocument();
};
export const testCase108 = Template.bind({});
testCase108.args = {
  tasks: ["の"]
};
testCase108.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 の`)
  ).toBeInTheDocument();
};
export const testCase109 = Template.bind({});
testCase109.args = {
  tasks: ["は"]
};
testCase109.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 は`)
  ).toBeInTheDocument();
};
export const testCase110 = Template.bind({});
testCase110.args = {
  tasks: ["ば"]
};
testCase110.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ば`)
  ).toBeInTheDocument();
};
export const testCase111 = Template.bind({});
testCase111.args = {
  tasks: ["ぱ"]
};
testCase111.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぱ`)
  ).toBeInTheDocument();
};
export const testCase112 = Template.bind({});
testCase112.args = {
  tasks: ["ひ"]
};
testCase112.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ひ`)
  ).toBeInTheDocument();
};
export const testCase113 = Template.bind({});
testCase113.args = {
  tasks: ["び"]
};
testCase113.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 び`)
  ).toBeInTheDocument();
};
export const testCase114 = Template.bind({});
testCase114.args = {
  tasks: ["ぴ"]
};
testCase114.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぴ`)
  ).toBeInTheDocument();
};
export const testCase115 = Template.bind({});
testCase115.args = {
  tasks: ["ふ"]
};
testCase115.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ふ`)
  ).toBeInTheDocument();
};
export const testCase116 = Template.bind({});
testCase116.args = {
  tasks: ["ぶ"]
};
testCase116.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぶ`)
  ).toBeInTheDocument();
};
export const testCase117 = Template.bind({});
testCase117.args = {
  tasks: ["ぷ"]
};
testCase117.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぷ`)
  ).toBeInTheDocument();
};
export const testCase118 = Template.bind({});
testCase118.args = {
  tasks: ["へ"]
};
testCase118.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 へ`)
  ).toBeInTheDocument();
};
export const testCase119 = Template.bind({});
testCase119.args = {
  tasks: ["べ"]
};
testCase119.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 べ`)
  ).toBeInTheDocument();
};
export const testCase120 = Template.bind({});
testCase120.args = {
  tasks: ["ぺ"]
};
testCase120.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぺ`)
  ).toBeInTheDocument();
};
export const testCase121 = Template.bind({});
testCase121.args = {
  tasks: ["ほ"]
};
testCase121.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ほ`)
  ).toBeInTheDocument();
};
export const testCase122 = Template.bind({});
testCase122.args = {
  tasks: ["ぼ"]
};
testCase122.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぼ`)
  ).toBeInTheDocument();
};
export const testCase123 = Template.bind({});
testCase123.args = {
  tasks: ["ぽ"]
};
testCase123.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ぽ`)
  ).toBeInTheDocument();
};
export const testCase124 = Template.bind({});
testCase124.args = {
  tasks: ["ま"]
};
testCase124.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ま`)
  ).toBeInTheDocument();
};
export const testCase125 = Template.bind({});
testCase125.args = {
  tasks: ["み"]
};
testCase125.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 み`)
  ).toBeInTheDocument();
};
export const testCase126 = Template.bind({});
testCase126.args = {
  tasks: ["む"]
};
testCase126.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 む`)
  ).toBeInTheDocument();
};
export const testCase127 = Template.bind({});
testCase127.args = {
  tasks: ["め"]
};
testCase127.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 め`)
  ).toBeInTheDocument();
};
export const testCase128 = Template.bind({});
testCase128.args = {
  tasks: ["も"]
};
testCase128.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 も`)
  ).toBeInTheDocument();
};
export const testCase129 = Template.bind({});
testCase129.args = {
  tasks: ["ゃ"]
};
testCase129.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゃ`)
  ).toBeInTheDocument();
};
export const testCase130 = Template.bind({});
testCase130.args = {
  tasks: ["や"]
};
testCase130.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 や`)
  ).toBeInTheDocument();
};
export const testCase131 = Template.bind({});
testCase131.args = {
  tasks: ["ゅ"]
};
testCase131.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゅ`)
  ).toBeInTheDocument();
};
export const testCase132 = Template.bind({});
testCase132.args = {
  tasks: ["ゆ"]
};
testCase132.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゆ`)
  ).toBeInTheDocument();
};
export const testCase133 = Template.bind({});
testCase133.args = {
  tasks: ["ょ"]
};
testCase133.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ょ`)
  ).toBeInTheDocument();
};
export const testCase134 = Template.bind({});
testCase134.args = {
  tasks: ["よ"]
};
testCase134.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 よ`)
  ).toBeInTheDocument();
};
export const testCase135 = Template.bind({});
testCase135.args = {
  tasks: ["ら"]
};
testCase135.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ら`)
  ).toBeInTheDocument();
};
export const testCase136 = Template.bind({});
testCase136.args = {
  tasks: ["り"]
};
testCase136.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 り`)
  ).toBeInTheDocument();
};
export const testCase137 = Template.bind({});
testCase137.args = {
  tasks: ["る"]
};
testCase137.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 る`)
  ).toBeInTheDocument();
};
export const testCase138 = Template.bind({});
testCase138.args = {
  tasks: ["れ"]
};
testCase138.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 れ`)
  ).toBeInTheDocument();
};
export const testCase139 = Template.bind({});
testCase139.args = {
  tasks: ["ろ"]
};
testCase139.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ろ`)
  ).toBeInTheDocument();
};
export const testCase140 = Template.bind({});
testCase140.args = {
  tasks: ["ゎ"]
};
testCase140.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゎ`)
  ).toBeInTheDocument();
};
export const testCase141 = Template.bind({});
testCase141.args = {
  tasks: ["わ"]
};
testCase141.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 わ`)
  ).toBeInTheDocument();
};
export const testCase142 = Template.bind({});
testCase142.args = {
  tasks: ["ゐ"]
};
testCase142.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゐ`)
  ).toBeInTheDocument();
};
export const testCase143 = Template.bind({});
testCase143.args = {
  tasks: ["ゑ"]
};
testCase143.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゑ`)
  ).toBeInTheDocument();
};
export const testCase144 = Template.bind({});
testCase144.args = {
  tasks: ["を"]
};
testCase144.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 を`)
  ).toBeInTheDocument();
};
export const testCase145 = Template.bind({});
testCase145.args = {
  tasks: ["ん"]
};
testCase145.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ん`)
  ).toBeInTheDocument();
};
export const testCase146 = Template.bind({});
testCase146.args = {
  tasks: ["ゔ"]
};
testCase146.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゔ`)
  ).toBeInTheDocument();
};
export const testCase147 = Template.bind({});
testCase147.args = {
  tasks: ["ゕ"]
};
testCase147.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゕ`)
  ).toBeInTheDocument();
};
export const testCase148 = Template.bind({});
testCase148.args = {
  tasks: ["ゖ"]
};
testCase148.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゖ`)
  ).toBeInTheDocument();
};
export const testCase149 = Template.bind({});
testCase149.args = {
  tasks: ["゗"]
};
testCase149.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゗`)
  ).toBeInTheDocument();
};
export const testCase150 = Template.bind({});
testCase150.args = {
  tasks: ["゘"]
};
testCase150.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゘`)
  ).toBeInTheDocument();
};
export const testCase151 = Template.bind({});
testCase151.args = {
  tasks: ["゙"]
};
testCase151.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゙`)
  ).toBeInTheDocument();
};
export const testCase152 = Template.bind({});
testCase152.args = {
  tasks: ["゚"]
};
testCase152.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゚`)
  ).toBeInTheDocument();
};
export const testCase153 = Template.bind({});
testCase153.args = {
  tasks: ["゛"]
};
testCase153.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゛`)
  ).toBeInTheDocument();
};
export const testCase154 = Template.bind({});
testCase154.args = {
  tasks: ["゜"]
};
testCase154.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゜`)
  ).toBeInTheDocument();
};
export const testCase155 = Template.bind({});
testCase155.args = {
  tasks: ["ゝ"]
};
testCase155.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゝ`)
  ).toBeInTheDocument();
};
export const testCase156 = Template.bind({});
testCase156.args = {
  tasks: ["ゞ"]
};
testCase156.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゞ`)
  ).toBeInTheDocument();
};
export const testCase157 = Template.bind({});
testCase157.args = {
  tasks: ["゠"]
};
testCase157.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゠`)
  ).toBeInTheDocument();
};
export const testCase158 = Template.bind({});
testCase158.args = {
  tasks: ["ァ"]
};
testCase158.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ァ`)
  ).toBeInTheDocument();
};
export const testCase159 = Template.bind({});
testCase159.args = {
  tasks: ["ア"]
};
testCase159.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ア`)
  ).toBeInTheDocument();
};
export const testCase160 = Template.bind({});
testCase160.args = {
  tasks: ["ィ"]
};
testCase160.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ィ`)
  ).toBeInTheDocument();
};
export const testCase161 = Template.bind({});
testCase161.args = {
  tasks: ["イ"]
};
testCase161.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 イ`)
  ).toBeInTheDocument();
};
export const testCase162 = Template.bind({});
testCase162.args = {
  tasks: ["ゥ"]
};
testCase162.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゥ`)
  ).toBeInTheDocument();
};
export const testCase163 = Template.bind({});
testCase163.args = {
  tasks: ["ウ"]
};
testCase163.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ウ`)
  ).toBeInTheDocument();
};
export const testCase164 = Template.bind({});
testCase164.args = {
  tasks: ["ェ"]
};
testCase164.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ェ`)
  ).toBeInTheDocument();
};
export const testCase165 = Template.bind({});
testCase165.args = {
  tasks: ["エ"]
};
testCase165.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 エ`)
  ).toBeInTheDocument();
};
export const testCase166 = Template.bind({});
testCase166.args = {
  tasks: ["ォ"]
};
testCase166.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ォ`)
  ).toBeInTheDocument();
};
export const testCase167 = Template.bind({});
testCase167.args = {
  tasks: ["オ"]
};
testCase167.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 オ`)
  ).toBeInTheDocument();
};
export const testCase168 = Template.bind({});
testCase168.args = {
  tasks: ["カ"]
};
testCase168.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 カ`)
  ).toBeInTheDocument();
};
export const testCase169 = Template.bind({});
testCase169.args = {
  tasks: ["ガ"]
};
testCase169.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ガ`)
  ).toBeInTheDocument();
};
export const testCase170 = Template.bind({});
testCase170.args = {
  tasks: ["キ"]
};
testCase170.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 キ`)
  ).toBeInTheDocument();
};
export const testCase171 = Template.bind({});
testCase171.args = {
  tasks: ["ギ"]
};
testCase171.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ギ`)
  ).toBeInTheDocument();
};
export const testCase172 = Template.bind({});
testCase172.args = {
  tasks: ["ク"]
};
testCase172.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ク`)
  ).toBeInTheDocument();
};
export const testCase173 = Template.bind({});
testCase173.args = {
  tasks: ["グ"]
};
testCase173.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 グ`)
  ).toBeInTheDocument();
};
export const testCase174 = Template.bind({});
testCase174.args = {
  tasks: ["ケ"]
};
testCase174.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ケ`)
  ).toBeInTheDocument();
};
export const testCase175 = Template.bind({});
testCase175.args = {
  tasks: ["ゲ"]
};
testCase175.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゲ`)
  ).toBeInTheDocument();
};
export const testCase176 = Template.bind({});
testCase176.args = {
  tasks: ["コ"]
};
testCase176.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 コ`)
  ).toBeInTheDocument();
};
export const testCase177 = Template.bind({});
testCase177.args = {
  tasks: ["ゴ"]
};
testCase177.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゴ`)
  ).toBeInTheDocument();
};
export const testCase178 = Template.bind({});
testCase178.args = {
  tasks: ["サ"]
};
testCase178.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 サ`)
  ).toBeInTheDocument();
};
export const testCase179 = Template.bind({});
testCase179.args = {
  tasks: ["ザ"]
};
testCase179.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ザ`)
  ).toBeInTheDocument();
};
export const testCase180 = Template.bind({});
testCase180.args = {
  tasks: ["シ"]
};
testCase180.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 シ`)
  ).toBeInTheDocument();
};
export const testCase181 = Template.bind({});
testCase181.args = {
  tasks: ["ジ"]
};
testCase181.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ジ`)
  ).toBeInTheDocument();
};
export const testCase182 = Template.bind({});
testCase182.args = {
  tasks: ["ス"]
};
testCase182.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ス`)
  ).toBeInTheDocument();
};
export const testCase183 = Template.bind({});
testCase183.args = {
  tasks: ["ズ"]
};
testCase183.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ズ`)
  ).toBeInTheDocument();
};
export const testCase184 = Template.bind({});
testCase184.args = {
  tasks: ["セ"]
};
testCase184.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 セ`)
  ).toBeInTheDocument();
};
export const testCase185 = Template.bind({});
testCase185.args = {
  tasks: ["ゼ"]
};
testCase185.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゼ`)
  ).toBeInTheDocument();
};
export const testCase186 = Template.bind({});
testCase186.args = {
  tasks: ["ソ"]
};
testCase186.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ソ`)
  ).toBeInTheDocument();
};
export const testCase187 = Template.bind({});
testCase187.args = {
  tasks: ["ゾ"]
};
testCase187.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ゾ`)
  ).toBeInTheDocument();
};
export const testCase188 = Template.bind({});
testCase188.args = {
  tasks: ["タ"]
};
testCase188.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 タ`)
  ).toBeInTheDocument();
};
export const testCase189 = Template.bind({});
testCase189.args = {
  tasks: ["ダ"]
};
testCase189.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ダ`)
  ).toBeInTheDocument();
};
export const testCase190 = Template.bind({});
testCase190.args = {
  tasks: ["チ"]
};
testCase190.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 チ`)
  ).toBeInTheDocument();
};
export const testCase191 = Template.bind({});
testCase191.args = {
  tasks: ["ヂ"]
};
testCase191.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヂ`)
  ).toBeInTheDocument();
};
export const testCase192 = Template.bind({});
testCase192.args = {
  tasks: ["ッ"]
};
testCase192.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ッ`)
  ).toBeInTheDocument();
};
export const testCase193 = Template.bind({});
testCase193.args = {
  tasks: ["ツ"]
};
testCase193.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ツ`)
  ).toBeInTheDocument();
};
export const testCase194 = Template.bind({});
testCase194.args = {
  tasks: ["ヅ"]
};
testCase194.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヅ`)
  ).toBeInTheDocument();
};
export const testCase195 = Template.bind({});
testCase195.args = {
  tasks: ["テ"]
};
testCase195.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 テ`)
  ).toBeInTheDocument();
};
export const testCase196 = Template.bind({});
testCase196.args = {
  tasks: ["デ"]
};
testCase196.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 デ`)
  ).toBeInTheDocument();
};
export const testCase197 = Template.bind({});
testCase197.args = {
  tasks: ["ト"]
};
testCase197.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ト`)
  ).toBeInTheDocument();
};
export const testCase198 = Template.bind({});
testCase198.args = {
  tasks: ["ド"]
};
testCase198.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ド`)
  ).toBeInTheDocument();
};
export const testCase199 = Template.bind({});
testCase199.args = {
  tasks: ["ナ"]
};
testCase199.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ナ`)
  ).toBeInTheDocument();
};
export const testCase200 = Template.bind({});
testCase200.args = {
  tasks: ["ニ"]
};
testCase200.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ニ`)
  ).toBeInTheDocument();
};
export const testCase201 = Template.bind({});
testCase201.args = {
  tasks: ["ヌ"]
};
testCase201.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヌ`)
  ).toBeInTheDocument();
};
export const testCase202 = Template.bind({});
testCase202.args = {
  tasks: ["ネ"]
};
testCase202.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ネ`)
  ).toBeInTheDocument();
};
export const testCase203 = Template.bind({});
testCase203.args = {
  tasks: ["ノ"]
};
testCase203.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ノ`)
  ).toBeInTheDocument();
};
export const testCase204 = Template.bind({});
testCase204.args = {
  tasks: ["ハ"]
};
testCase204.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ハ`)
  ).toBeInTheDocument();
};
export const testCase205 = Template.bind({});
testCase205.args = {
  tasks: ["バ"]
};
testCase205.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 バ`)
  ).toBeInTheDocument();
};
export const testCase206 = Template.bind({});
testCase206.args = {
  tasks: ["パ"]
};
testCase206.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 パ`)
  ).toBeInTheDocument();
};
export const testCase207 = Template.bind({});
testCase207.args = {
  tasks: ["ヒ"]
};
testCase207.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヒ`)
  ).toBeInTheDocument();
};
export const testCase208 = Template.bind({});
testCase208.args = {
  tasks: ["ビ"]
};
testCase208.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ビ`)
  ).toBeInTheDocument();
};
export const testCase209 = Template.bind({});
testCase209.args = {
  tasks: ["ピ"]
};
testCase209.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ピ`)
  ).toBeInTheDocument();
};
export const testCase210 = Template.bind({});
testCase210.args = {
  tasks: ["フ"]
};
testCase210.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 フ`)
  ).toBeInTheDocument();
};
export const testCase211 = Template.bind({});
testCase211.args = {
  tasks: ["ブ"]
};
testCase211.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ブ`)
  ).toBeInTheDocument();
};
export const testCase212 = Template.bind({});
testCase212.args = {
  tasks: ["プ"]
};
testCase212.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 プ`)
  ).toBeInTheDocument();
};
export const testCase213 = Template.bind({});
testCase213.args = {
  tasks: ["ヘ"]
};
testCase213.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヘ`)
  ).toBeInTheDocument();
};
export const testCase214 = Template.bind({});
testCase214.args = {
  tasks: ["ベ"]
};
testCase214.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ベ`)
  ).toBeInTheDocument();
};
export const testCase215 = Template.bind({});
testCase215.args = {
  tasks: ["ペ"]
};
testCase215.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ペ`)
  ).toBeInTheDocument();
};
export const testCase216 = Template.bind({});
testCase216.args = {
  tasks: ["ホ"]
};
testCase216.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ホ`)
  ).toBeInTheDocument();
};
export const testCase217 = Template.bind({});
testCase217.args = {
  tasks: ["ボ"]
};
testCase217.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ボ`)
  ).toBeInTheDocument();
};
export const testCase218 = Template.bind({});
testCase218.args = {
  tasks: ["ポ"]
};
testCase218.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ポ`)
  ).toBeInTheDocument();
};
export const testCase219 = Template.bind({});
testCase219.args = {
  tasks: ["マ"]
};
testCase219.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 マ`)
  ).toBeInTheDocument();
};
export const testCase220 = Template.bind({});
testCase220.args = {
  tasks: ["ミ"]
};
testCase220.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ミ`)
  ).toBeInTheDocument();
};
export const testCase221 = Template.bind({});
testCase221.args = {
  tasks: ["ム"]
};
testCase221.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ム`)
  ).toBeInTheDocument();
};
export const testCase222 = Template.bind({});
testCase222.args = {
  tasks: ["メ"]
};
testCase222.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 メ`)
  ).toBeInTheDocument();
};
export const testCase223 = Template.bind({});
testCase223.args = {
  tasks: ["モ"]
};
testCase223.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 モ`)
  ).toBeInTheDocument();
};
export const testCase224 = Template.bind({});
testCase224.args = {
  tasks: ["ャ"]
};
testCase224.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ャ`)
  ).toBeInTheDocument();
};
export const testCase225 = Template.bind({});
testCase225.args = {
  tasks: ["ヤ"]
};
testCase225.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヤ`)
  ).toBeInTheDocument();
};
export const testCase226 = Template.bind({});
testCase226.args = {
  tasks: ["ュ"]
};
testCase226.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ュ`)
  ).toBeInTheDocument();
};
export const testCase227 = Template.bind({});
testCase227.args = {
  tasks: ["ユ"]
};
testCase227.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ユ`)
  ).toBeInTheDocument();
};
export const testCase228 = Template.bind({});
testCase228.args = {
  tasks: ["ョ"]
};
testCase228.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ョ`)
  ).toBeInTheDocument();
};
export const testCase229 = Template.bind({});
testCase229.args = {
  tasks: ["ヨ"]
};
testCase229.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヨ`)
  ).toBeInTheDocument();
};
export const testCase230 = Template.bind({});
testCase230.args = {
  tasks: ["ラ"]
};
testCase230.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ラ`)
  ).toBeInTheDocument();
};
export const testCase231 = Template.bind({});
testCase231.args = {
  tasks: ["リ"]
};
testCase231.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 リ`)
  ).toBeInTheDocument();
};
export const testCase232 = Template.bind({});
testCase232.args = {
  tasks: ["ル"]
};
testCase232.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ル`)
  ).toBeInTheDocument();
};
export const testCase233 = Template.bind({});
testCase233.args = {
  tasks: ["レ"]
};
testCase233.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 レ`)
  ).toBeInTheDocument();
};
export const testCase234 = Template.bind({});
testCase234.args = {
  tasks: ["ロ"]
};
testCase234.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ロ`)
  ).toBeInTheDocument();
};
export const testCase235 = Template.bind({});
testCase235.args = {
  tasks: ["ヮ"]
};
testCase235.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヮ`)
  ).toBeInTheDocument();
};
export const testCase236 = Template.bind({});
testCase236.args = {
  tasks: ["ワ"]
};
testCase236.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ワ`)
  ).toBeInTheDocument();
};
export const testCase237 = Template.bind({});
testCase237.args = {
  tasks: ["ヰ"]
};
testCase237.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヰ`)
  ).toBeInTheDocument();
};
export const testCase238 = Template.bind({});
testCase238.args = {
  tasks: ["ヱ"]
};
testCase238.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヱ`)
  ).toBeInTheDocument();
};
export const testCase239 = Template.bind({});
testCase239.args = {
  tasks: ["ヲ"]
};
testCase239.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヲ`)
  ).toBeInTheDocument();
};
export const testCase240 = Template.bind({});
testCase240.args = {
  tasks: ["ン"]
};
testCase240.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ン`)
  ).toBeInTheDocument();
};
export const testCase241 = Template.bind({});
testCase241.args = {
  tasks: ["ヴ"]
};
testCase241.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヴ`)
  ).toBeInTheDocument();
};
export const testCase242 = Template.bind({});
testCase242.args = {
  tasks: ["ヵ"]
};
testCase242.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヵ`)
  ).toBeInTheDocument();
};
export const testCase243 = Template.bind({});
testCase243.args = {
  tasks: ["ヶ"]
};
testCase243.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヶ`)
  ).toBeInTheDocument();
};
export const testCase244 = Template.bind({});
testCase244.args = {
  tasks: ["ヷ"]
};
testCase244.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヷ`)
  ).toBeInTheDocument();
};
export const testCase245 = Template.bind({});
testCase245.args = {
  tasks: ["ヸ"]
};
testCase245.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヸ`)
  ).toBeInTheDocument();
};
export const testCase246 = Template.bind({});
testCase246.args = {
  tasks: ["ヹ"]
};
testCase246.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヹ`)
  ).toBeInTheDocument();
};
export const testCase247 = Template.bind({});
testCase247.args = {
  tasks: ["ヺ"]
};
testCase247.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヺ`)
  ).toBeInTheDocument();
};
export const testCase248 = Template.bind({});
testCase248.args = {
  tasks: ["・"]
};
testCase248.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ・`)
  ).toBeInTheDocument();
};
export const testCase249 = Template.bind({});
testCase249.args = {
  tasks: ["ー"]
};
testCase249.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ー`)
  ).toBeInTheDocument();
};
export const testCase250 = Template.bind({});
testCase250.args = {
  tasks: ["ヽ"]
};
testCase250.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヽ`)
  ).toBeInTheDocument();
};
export const testCase251 = Template.bind({});
testCase251.args = {
  tasks: ["ヾ"]
};
testCase251.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 ヾ`)
  ).toBeInTheDocument();
};
export const testCase252 = Template.bind({});
testCase252.args = {
  tasks: ["一"]
};
testCase252.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 一`)
  ).toBeInTheDocument();
};
export const testCase253 = Template.bind({});
testCase253.args = {
  tasks: ["丁"]
};
testCase253.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丁`)
  ).toBeInTheDocument();
};
export const testCase254 = Template.bind({});
testCase254.args = {
  tasks: ["丂"]
};
testCase254.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丂`)
  ).toBeInTheDocument();
};
export const testCase255 = Template.bind({});
testCase255.args = {
  tasks: ["七"]
};
testCase255.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 七`)
  ).toBeInTheDocument();
};
export const testCase256 = Template.bind({});
testCase256.args = {
  tasks: ["丄"]
};
testCase256.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丄`)
  ).toBeInTheDocument();
};
export const testCase257 = Template.bind({});
testCase257.args = {
  tasks: ["丅"]
};
testCase257.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丅`)
  ).toBeInTheDocument();
};
export const testCase258 = Template.bind({});
testCase258.args = {
  tasks: ["丆"]
};
testCase258.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丆`)
  ).toBeInTheDocument();
};
export const testCase259 = Template.bind({});
testCase259.args = {
  tasks: ["万"]
};
testCase259.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 万`)
  ).toBeInTheDocument();
};
export const testCase260 = Template.bind({});
testCase260.args = {
  tasks: ["丈"]
};
testCase260.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丈`)
  ).toBeInTheDocument();
};
export const testCase261 = Template.bind({});
testCase261.args = {
  tasks: ["三"]
};
testCase261.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 三`)
  ).toBeInTheDocument();
};
export const testCase262 = Template.bind({});
testCase262.args = {
  tasks: ["上"]
};
testCase262.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 上`)
  ).toBeInTheDocument();
};
export const testCase263 = Template.bind({});
testCase263.args = {
  tasks: ["下"]
};
testCase263.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 下`)
  ).toBeInTheDocument();
};
export const testCase264 = Template.bind({});
testCase264.args = {
  tasks: ["丌"]
};
testCase264.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丌`)
  ).toBeInTheDocument();
};
export const testCase265 = Template.bind({});
testCase265.args = {
  tasks: ["不"]
};
testCase265.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 不`)
  ).toBeInTheDocument();
};
export const testCase266 = Template.bind({});
testCase266.args = {
  tasks: ["与"]
};
testCase266.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 与`)
  ).toBeInTheDocument();
};
export const testCase267 = Template.bind({});
testCase267.args = {
  tasks: ["丏"]
};
testCase267.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丏`)
  ).toBeInTheDocument();
};
export const testCase268 = Template.bind({});
testCase268.args = {
  tasks: ["丐"]
};
testCase268.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丐`)
  ).toBeInTheDocument();
};
export const testCase269 = Template.bind({});
testCase269.args = {
  tasks: ["丑"]
};
testCase269.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丑`)
  ).toBeInTheDocument();
};
export const testCase270 = Template.bind({});
testCase270.args = {
  tasks: ["丒"]
};
testCase270.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丒`)
  ).toBeInTheDocument();
};
export const testCase271 = Template.bind({});
testCase271.args = {
  tasks: ["专"]
};
testCase271.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 专`)
  ).toBeInTheDocument();
};
export const testCase272 = Template.bind({});
testCase272.args = {
  tasks: ["且"]
};
testCase272.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 且`)
  ).toBeInTheDocument();
};
export const testCase273 = Template.bind({});
testCase273.args = {
  tasks: ["丕"]
};
testCase273.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丕`)
  ).toBeInTheDocument();
};
export const testCase274 = Template.bind({});
testCase274.args = {
  tasks: ["世"]
};
testCase274.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 世`)
  ).toBeInTheDocument();
};
export const testCase275 = Template.bind({});
testCase275.args = {
  tasks: ["丗"]
};
testCase275.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丗`)
  ).toBeInTheDocument();
};
export const testCase276 = Template.bind({});
testCase276.args = {
  tasks: ["丘"]
};
testCase276.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丘`)
  ).toBeInTheDocument();
};
export const testCase277 = Template.bind({});
testCase277.args = {
  tasks: ["丙"]
};
testCase277.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丙`)
  ).toBeInTheDocument();
};
export const testCase278 = Template.bind({});
testCase278.args = {
  tasks: ["业"]
};
testCase278.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 业`)
  ).toBeInTheDocument();
};
export const testCase279 = Template.bind({});
testCase279.args = {
  tasks: ["丛"]
};
testCase279.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丛`)
  ).toBeInTheDocument();
};
export const testCase280 = Template.bind({});
testCase280.args = {
  tasks: ["东"]
};
testCase280.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 东`)
  ).toBeInTheDocument();
};
export const testCase281 = Template.bind({});
testCase281.args = {
  tasks: ["丝"]
};
testCase281.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丝`)
  ).toBeInTheDocument();
};
export const testCase282 = Template.bind({});
testCase282.args = {
  tasks: ["丞"]
};
testCase282.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丞`)
  ).toBeInTheDocument();
};
export const testCase283 = Template.bind({});
testCase283.args = {
  tasks: ["丟"]
};
testCase283.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丟`)
  ).toBeInTheDocument();
};
export const testCase284 = Template.bind({});
testCase284.args = {
  tasks: ["丠"]
};
testCase284.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丠`)
  ).toBeInTheDocument();
};
export const testCase285 = Template.bind({});
testCase285.args = {
  tasks: ["両"]
};
testCase285.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 両`)
  ).toBeInTheDocument();
};
export const testCase286 = Template.bind({});
testCase286.args = {
  tasks: ["丢"]
};
testCase286.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丢`)
  ).toBeInTheDocument();
};
export const testCase287 = Template.bind({});
testCase287.args = {
  tasks: ["丣"]
};
testCase287.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丣`)
  ).toBeInTheDocument();
};
export const testCase288 = Template.bind({});
testCase288.args = {
  tasks: ["两"]
};
testCase288.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 两`)
  ).toBeInTheDocument();
};
export const testCase289 = Template.bind({});
testCase289.args = {
  tasks: ["严"]
};
testCase289.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 严`)
  ).toBeInTheDocument();
};
export const testCase290 = Template.bind({});
testCase290.args = {
  tasks: ["並"]
};
testCase290.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 並`)
  ).toBeInTheDocument();
};
export const testCase291 = Template.bind({});
testCase291.args = {
  tasks: ["丧"]
};
testCase291.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丧`)
  ).toBeInTheDocument();
};
export const testCase292 = Template.bind({});
testCase292.args = {
  tasks: ["丨"]
};
testCase292.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丨`)
  ).toBeInTheDocument();
};
export const testCase293 = Template.bind({});
testCase293.args = {
  tasks: ["丩"]
};
testCase293.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丩`)
  ).toBeInTheDocument();
};
export const testCase294 = Template.bind({});
testCase294.args = {
  tasks: ["个"]
};
testCase294.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 个`)
  ).toBeInTheDocument();
};
export const testCase295 = Template.bind({});
testCase295.args = {
  tasks: ["丫"]
};
testCase295.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丫`)
  ).toBeInTheDocument();
};
export const testCase296 = Template.bind({});
testCase296.args = {
  tasks: ["丬"]
};
testCase296.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丬`)
  ).toBeInTheDocument();
};
export const testCase297 = Template.bind({});
testCase297.args = {
  tasks: ["中"]
};
testCase297.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 中`)
  ).toBeInTheDocument();
};
export const testCase298 = Template.bind({});
testCase298.args = {
  tasks: ["丮"]
};
testCase298.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丮`)
  ).toBeInTheDocument();
};
export const testCase299 = Template.bind({});
testCase299.args = {
  tasks: ["丯"]
};
testCase299.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丯`)
  ).toBeInTheDocument();
};
export const testCase300 = Template.bind({});
testCase300.args = {
  tasks: ["丰"]
};
testCase300.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丰`)
  ).toBeInTheDocument();
};
export const testCase301 = Template.bind({});
testCase301.args = {
  tasks: ["丱"]
};
testCase301.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丱`)
  ).toBeInTheDocument();
};
export const testCase302 = Template.bind({});
testCase302.args = {
  tasks: ["串"]
};
testCase302.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 串`)
  ).toBeInTheDocument();
};
export const testCase303 = Template.bind({});
testCase303.args = {
  tasks: ["丳"]
};
testCase303.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丳`)
  ).toBeInTheDocument();
};
export const testCase304 = Template.bind({});
testCase304.args = {
  tasks: ["临"]
};
testCase304.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 临`)
  ).toBeInTheDocument();
};
export const testCase305 = Template.bind({});
testCase305.args = {
  tasks: ["丵"]
};
testCase305.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丵`)
  ).toBeInTheDocument();
};
export const testCase306 = Template.bind({});
testCase306.args = {
  tasks: ["丶"]
};
testCase306.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丶`)
  ).toBeInTheDocument();
};
export const testCase307 = Template.bind({});
testCase307.args = {
  tasks: ["丷"]
};
testCase307.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丷`)
  ).toBeInTheDocument();
};
export const testCase308 = Template.bind({});
testCase308.args = {
  tasks: ["丸"]
};
testCase308.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丸`)
  ).toBeInTheDocument();
};
export const testCase309 = Template.bind({});
testCase309.args = {
  tasks: ["丹"]
};
testCase309.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丹`)
  ).toBeInTheDocument();
};
export const testCase310 = Template.bind({});
testCase310.args = {
  tasks: ["为"]
};
testCase310.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 为`)
  ).toBeInTheDocument();
};
export const testCase311 = Template.bind({});
testCase311.args = {
  tasks: ["主"]
};
testCase311.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 主`)
  ).toBeInTheDocument();
};
export const testCase312 = Template.bind({});
testCase312.args = {
  tasks: ["丼"]
};
testCase312.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丼`)
  ).toBeInTheDocument();
};
export const testCase313 = Template.bind({});
testCase313.args = {
  tasks: ["丽"]
};
testCase313.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丽`)
  ).toBeInTheDocument();
};
export const testCase314 = Template.bind({});
testCase314.args = {
  tasks: ["举"]
};
testCase314.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 举`)
  ).toBeInTheDocument();
};
export const testCase315 = Template.bind({});
testCase315.args = {
  tasks: ["丿"]
};
testCase315.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 丿`)
  ).toBeInTheDocument();
};
export const testCase316 = Template.bind({});
testCase316.args = {
  tasks: ["乀"]
};
testCase316.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乀`)
  ).toBeInTheDocument();
};
export const testCase317 = Template.bind({});
testCase317.args = {
  tasks: ["乁"]
};
testCase317.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乁`)
  ).toBeInTheDocument();
};
export const testCase318 = Template.bind({});
testCase318.args = {
  tasks: ["乂"]
};
testCase318.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乂`)
  ).toBeInTheDocument();
};
export const testCase319 = Template.bind({});
testCase319.args = {
  tasks: ["乃"]
};
testCase319.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乃`)
  ).toBeInTheDocument();
};
export const testCase320 = Template.bind({});
testCase320.args = {
  tasks: ["乄"]
};
testCase320.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乄`)
  ).toBeInTheDocument();
};
export const testCase321 = Template.bind({});
testCase321.args = {
  tasks: ["久"]
};
testCase321.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 久`)
  ).toBeInTheDocument();
};
export const testCase322 = Template.bind({});
testCase322.args = {
  tasks: ["乆"]
};
testCase322.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乆`)
  ).toBeInTheDocument();
};
export const testCase323 = Template.bind({});
testCase323.args = {
  tasks: ["乇"]
};
testCase323.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乇`)
  ).toBeInTheDocument();
};
export const testCase324 = Template.bind({});
testCase324.args = {
  tasks: ["么"]
};
testCase324.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 么`)
  ).toBeInTheDocument();
};
export const testCase325 = Template.bind({});
testCase325.args = {
  tasks: ["义"]
};
testCase325.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 义`)
  ).toBeInTheDocument();
};
export const testCase326 = Template.bind({});
testCase326.args = {
  tasks: ["乊"]
};
testCase326.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乊`)
  ).toBeInTheDocument();
};
export const testCase327 = Template.bind({});
testCase327.args = {
  tasks: ["之"]
};
testCase327.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 之`)
  ).toBeInTheDocument();
};
export const testCase328 = Template.bind({});
testCase328.args = {
  tasks: ["乌"]
};
testCase328.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乌`)
  ).toBeInTheDocument();
};
export const testCase329 = Template.bind({});
testCase329.args = {
  tasks: ["乍"]
};
testCase329.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乍`)
  ).toBeInTheDocument();
};
export const testCase330 = Template.bind({});
testCase330.args = {
  tasks: ["乎"]
};
testCase330.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乎`)
  ).toBeInTheDocument();
};
export const testCase331 = Template.bind({});
testCase331.args = {
  tasks: ["乏"]
};
testCase331.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乏`)
  ).toBeInTheDocument();
};
export const testCase332 = Template.bind({});
testCase332.args = {
  tasks: ["乐"]
};
testCase332.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乐`)
  ).toBeInTheDocument();
};
export const testCase333 = Template.bind({});
testCase333.args = {
  tasks: ["乑"]
};
testCase333.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乑`)
  ).toBeInTheDocument();
};
export const testCase334 = Template.bind({});
testCase334.args = {
  tasks: ["乒"]
};
testCase334.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乒`)
  ).toBeInTheDocument();
};
export const testCase335 = Template.bind({});
testCase335.args = {
  tasks: ["乓"]
};
testCase335.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乓`)
  ).toBeInTheDocument();
};
export const testCase336 = Template.bind({});
testCase336.args = {
  tasks: ["乔"]
};
testCase336.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乔`)
  ).toBeInTheDocument();
};
export const testCase337 = Template.bind({});
testCase337.args = {
  tasks: ["乕"]
};
testCase337.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乕`)
  ).toBeInTheDocument();
};
export const testCase338 = Template.bind({});
testCase338.args = {
  tasks: ["乖"]
};
testCase338.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乖`)
  ).toBeInTheDocument();
};
export const testCase339 = Template.bind({});
testCase339.args = {
  tasks: ["乗"]
};
testCase339.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乗`)
  ).toBeInTheDocument();
};
export const testCase340 = Template.bind({});
testCase340.args = {
  tasks: ["乘"]
};
testCase340.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乘`)
  ).toBeInTheDocument();
};
export const testCase341 = Template.bind({});
testCase341.args = {
  tasks: ["乙"]
};
testCase341.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乙`)
  ).toBeInTheDocument();
};
export const testCase342 = Template.bind({});
testCase342.args = {
  tasks: ["乚"]
};
testCase342.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乚`)
  ).toBeInTheDocument();
};
export const testCase343 = Template.bind({});
testCase343.args = {
  tasks: ["乛"]
};
testCase343.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乛`)
  ).toBeInTheDocument();
};
export const testCase344 = Template.bind({});
testCase344.args = {
  tasks: ["乜"]
};
testCase344.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乜`)
  ).toBeInTheDocument();
};
export const testCase345 = Template.bind({});
testCase345.args = {
  tasks: ["九"]
};
testCase345.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 九`)
  ).toBeInTheDocument();
};
export const testCase346 = Template.bind({});
testCase346.args = {
  tasks: ["乞"]
};
testCase346.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乞`)
  ).toBeInTheDocument();
};
export const testCase347 = Template.bind({});
testCase347.args = {
  tasks: ["也"]
};
testCase347.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 也`)
  ).toBeInTheDocument();
};
export const testCase348 = Template.bind({});
testCase348.args = {
  tasks: ["习"]
};
testCase348.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 习`)
  ).toBeInTheDocument();
};
export const testCase349 = Template.bind({});
testCase349.args = {
  tasks: ["乡"]
};
testCase349.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乡`)
  ).toBeInTheDocument();
};
export const testCase350 = Template.bind({});
testCase350.args = {
  tasks: ["乢"]
};
testCase350.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乢`)
  ).toBeInTheDocument();
};
export const testCase351 = Template.bind({});
testCase351.args = {
  tasks: ["乣"]
};
testCase351.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乣`)
  ).toBeInTheDocument();
};
export const testCase352 = Template.bind({});
testCase352.args = {
  tasks: ["乤"]
};
testCase352.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乤`)
  ).toBeInTheDocument();
};
export const testCase353 = Template.bind({});
testCase353.args = {
  tasks: ["乥"]
};
testCase353.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乥`)
  ).toBeInTheDocument();
};
export const testCase354 = Template.bind({});
testCase354.args = {
  tasks: ["书"]
};
testCase354.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 书`)
  ).toBeInTheDocument();
};
export const testCase355 = Template.bind({});
testCase355.args = {
  tasks: ["乧"]
};
testCase355.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乧`)
  ).toBeInTheDocument();
};
export const testCase356 = Template.bind({});
testCase356.args = {
  tasks: ["乨"]
};
testCase356.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乨`)
  ).toBeInTheDocument();
};
export const testCase357 = Template.bind({});
testCase357.args = {
  tasks: ["乩"]
};
testCase357.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乩`)
  ).toBeInTheDocument();
};
export const testCase358 = Template.bind({});
testCase358.args = {
  tasks: ["乪"]
};
testCase358.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乪`)
  ).toBeInTheDocument();
};
export const testCase359 = Template.bind({});
testCase359.args = {
  tasks: ["乫"]
};
testCase359.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乫`)
  ).toBeInTheDocument();
};
export const testCase360 = Template.bind({});
testCase360.args = {
  tasks: ["乬"]
};
testCase360.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乬`)
  ).toBeInTheDocument();
};
export const testCase361 = Template.bind({});
testCase361.args = {
  tasks: ["乭"]
};
testCase361.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乭`)
  ).toBeInTheDocument();
};
export const testCase362 = Template.bind({});
testCase362.args = {
  tasks: ["乮"]
};
testCase362.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乮`)
  ).toBeInTheDocument();
};
export const testCase363 = Template.bind({});
testCase363.args = {
  tasks: ["乯"]
};
testCase363.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乯`)
  ).toBeInTheDocument();
};
export const testCase364 = Template.bind({});
testCase364.args = {
  tasks: ["买"]
};
testCase364.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 买`)
  ).toBeInTheDocument();
};
export const testCase365 = Template.bind({});
testCase365.args = {
  tasks: ["乱"]
};
testCase365.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乱`)
  ).toBeInTheDocument();
};
export const testCase366 = Template.bind({});
testCase366.args = {
  tasks: ["乲"]
};
testCase366.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乲`)
  ).toBeInTheDocument();
};
export const testCase367 = Template.bind({});
testCase367.args = {
  tasks: ["乳"]
};
testCase367.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乳`)
  ).toBeInTheDocument();
};
export const testCase368 = Template.bind({});
testCase368.args = {
  tasks: ["乴"]
};
testCase368.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乴`)
  ).toBeInTheDocument();
};
export const testCase369 = Template.bind({});
testCase369.args = {
  tasks: ["乵"]
};
testCase369.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乵`)
  ).toBeInTheDocument();
};
export const testCase370 = Template.bind({});
testCase370.args = {
  tasks: ["乶"]
};
testCase370.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乶`)
  ).toBeInTheDocument();
};
export const testCase371 = Template.bind({});
testCase371.args = {
  tasks: ["乷"]
};
testCase371.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乷`)
  ).toBeInTheDocument();
};
export const testCase372 = Template.bind({});
testCase372.args = {
  tasks: ["乸"]
};
testCase372.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乸`)
  ).toBeInTheDocument();
};
export const testCase373 = Template.bind({});
testCase373.args = {
  tasks: ["乹"]
};
testCase373.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乹`)
  ).toBeInTheDocument();
};
export const testCase374 = Template.bind({});
testCase374.args = {
  tasks: ["乺"]
};
testCase374.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乺`)
  ).toBeInTheDocument();
};
export const testCase375 = Template.bind({});
testCase375.args = {
  tasks: ["乻"]
};
testCase375.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乻`)
  ).toBeInTheDocument();
};
export const testCase376 = Template.bind({});
testCase376.args = {
  tasks: ["乼"]
};
testCase376.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乼`)
  ).toBeInTheDocument();
};
export const testCase377 = Template.bind({});
testCase377.args = {
  tasks: ["乽"]
};
testCase377.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乽`)
  ).toBeInTheDocument();
};
export const testCase378 = Template.bind({});
testCase378.args = {
  tasks: ["乾"]
};
testCase378.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乾`)
  ).toBeInTheDocument();
};
export const testCase379 = Template.bind({});
testCase379.args = {
  tasks: ["乿"]
};
testCase379.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 乿`)
  ).toBeInTheDocument();
};
export const testCase380 = Template.bind({});
testCase380.args = {
  tasks: ["亀"]
};
testCase380.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亀`)
  ).toBeInTheDocument();
};
export const testCase381 = Template.bind({});
testCase381.args = {
  tasks: ["亁"]
};
testCase381.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亁`)
  ).toBeInTheDocument();
};
export const testCase382 = Template.bind({});
testCase382.args = {
  tasks: ["亂"]
};
testCase382.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亂`)
  ).toBeInTheDocument();
};
export const testCase383 = Template.bind({});
testCase383.args = {
  tasks: ["亃"]
};
testCase383.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亃`)
  ).toBeInTheDocument();
};
export const testCase384 = Template.bind({});
testCase384.args = {
  tasks: ["亄"]
};
testCase384.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亄`)
  ).toBeInTheDocument();
};
export const testCase385 = Template.bind({});
testCase385.args = {
  tasks: ["亅"]
};
testCase385.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亅`)
  ).toBeInTheDocument();
};
export const testCase386 = Template.bind({});
testCase386.args = {
  tasks: ["了"]
};
testCase386.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 了`)
  ).toBeInTheDocument();
};
export const testCase387 = Template.bind({});
testCase387.args = {
  tasks: ["亇"]
};
testCase387.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亇`)
  ).toBeInTheDocument();
};
export const testCase388 = Template.bind({});
testCase388.args = {
  tasks: ["予"]
};
testCase388.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 予`)
  ).toBeInTheDocument();
};
export const testCase389 = Template.bind({});
testCase389.args = {
  tasks: ["争"]
};
testCase389.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 争`)
  ).toBeInTheDocument();
};
export const testCase390 = Template.bind({});
testCase390.args = {
  tasks: ["亊"]
};
testCase390.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亊`)
  ).toBeInTheDocument();
};
export const testCase391 = Template.bind({});
testCase391.args = {
  tasks: ["事"]
};
testCase391.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 事`)
  ).toBeInTheDocument();
};
export const testCase392 = Template.bind({});
testCase392.args = {
  tasks: ["二"]
};
testCase392.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 二`)
  ).toBeInTheDocument();
};
export const testCase393 = Template.bind({});
testCase393.args = {
  tasks: ["亍"]
};
testCase393.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亍`)
  ).toBeInTheDocument();
};
export const testCase394 = Template.bind({});
testCase394.args = {
  tasks: ["于"]
};
testCase394.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 于`)
  ).toBeInTheDocument();
};
export const testCase395 = Template.bind({});
testCase395.args = {
  tasks: ["亏"]
};
testCase395.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亏`)
  ).toBeInTheDocument();
};
export const testCase396 = Template.bind({});
testCase396.args = {
  tasks: ["亐"]
};
testCase396.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亐`)
  ).toBeInTheDocument();
};
export const testCase397 = Template.bind({});
testCase397.args = {
  tasks: ["云"]
};
testCase397.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 云`)
  ).toBeInTheDocument();
};
export const testCase398 = Template.bind({});
testCase398.args = {
  tasks: ["互"]
};
testCase398.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 互`)
  ).toBeInTheDocument();
};
export const testCase399 = Template.bind({});
testCase399.args = {
  tasks: ["亓"]
};
testCase399.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亓`)
  ).toBeInTheDocument();
};
export const testCase400 = Template.bind({});
testCase400.args = {
  tasks: ["五"]
};
testCase400.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 五`)
  ).toBeInTheDocument();
};
export const testCase401 = Template.bind({});
testCase401.args = {
  tasks: ["井"]
};
testCase401.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 井`)
  ).toBeInTheDocument();
};
export const testCase402 = Template.bind({});
testCase402.args = {
  tasks: ["亖"]
};
testCase402.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亖`)
  ).toBeInTheDocument();
};
export const testCase403 = Template.bind({});
testCase403.args = {
  tasks: ["亗"]
};
testCase403.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亗`)
  ).toBeInTheDocument();
};
export const testCase404 = Template.bind({});
testCase404.args = {
  tasks: ["亘"]
};
testCase404.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亘`)
  ).toBeInTheDocument();
};
export const testCase405 = Template.bind({});
testCase405.args = {
  tasks: ["亙"]
};
testCase405.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亙`)
  ).toBeInTheDocument();
};
export const testCase406 = Template.bind({});
testCase406.args = {
  tasks: ["亚"]
};
testCase406.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亚`)
  ).toBeInTheDocument();
};
export const testCase407 = Template.bind({});
testCase407.args = {
  tasks: ["些"]
};
testCase407.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 些`)
  ).toBeInTheDocument();
};
export const testCase408 = Template.bind({});
testCase408.args = {
  tasks: ["亜"]
};
testCase408.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亜`)
  ).toBeInTheDocument();
};
export const testCase409 = Template.bind({});
testCase409.args = {
  tasks: ["亝"]
};
testCase409.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亝`)
  ).toBeInTheDocument();
};
export const testCase410 = Template.bind({});
testCase410.args = {
  tasks: ["亞"]
};
testCase410.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亞`)
  ).toBeInTheDocument();
};
export const testCase411 = Template.bind({});
testCase411.args = {
  tasks: ["亟"]
};
testCase411.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亟`)
  ).toBeInTheDocument();
};
export const testCase412 = Template.bind({});
testCase412.args = {
  tasks: ["亠"]
};
testCase412.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亠`)
  ).toBeInTheDocument();
};
export const testCase413 = Template.bind({});
testCase413.args = {
  tasks: ["亡"]
};
testCase413.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亡`)
  ).toBeInTheDocument();
};
export const testCase414 = Template.bind({});
testCase414.args = {
  tasks: ["亢"]
};
testCase414.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亢`)
  ).toBeInTheDocument();
};
export const testCase415 = Template.bind({});
testCase415.args = {
  tasks: ["亣"]
};
testCase415.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亣`)
  ).toBeInTheDocument();
};
export const testCase416 = Template.bind({});
testCase416.args = {
  tasks: ["交"]
};
testCase416.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 交`)
  ).toBeInTheDocument();
};
export const testCase417 = Template.bind({});
testCase417.args = {
  tasks: ["亥"]
};
testCase417.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亥`)
  ).toBeInTheDocument();
};
export const testCase418 = Template.bind({});
testCase418.args = {
  tasks: ["亦"]
};
testCase418.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亦`)
  ).toBeInTheDocument();
};
export const testCase419 = Template.bind({});
testCase419.args = {
  tasks: ["产"]
};
testCase419.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 产`)
  ).toBeInTheDocument();
};
export const testCase420 = Template.bind({});
testCase420.args = {
  tasks: ["亨"]
};
testCase420.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亨`)
  ).toBeInTheDocument();
};
export const testCase421 = Template.bind({});
testCase421.args = {
  tasks: ["亩"]
};
testCase421.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亩`)
  ).toBeInTheDocument();
};
export const testCase422 = Template.bind({});
testCase422.args = {
  tasks: ["亪"]
};
testCase422.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亪`)
  ).toBeInTheDocument();
};
export const testCase423 = Template.bind({});
testCase423.args = {
  tasks: ["享"]
};
testCase423.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 享`)
  ).toBeInTheDocument();
};
export const testCase424 = Template.bind({});
testCase424.args = {
  tasks: ["京"]
};
testCase424.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 京`)
  ).toBeInTheDocument();
};
export const testCase425 = Template.bind({});
testCase425.args = {
  tasks: ["亭"]
};
testCase425.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亭`)
  ).toBeInTheDocument();
};
export const testCase426 = Template.bind({});
testCase426.args = {
  tasks: ["亮"]
};
testCase426.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亮`)
  ).toBeInTheDocument();
};
export const testCase427 = Template.bind({});
testCase427.args = {
  tasks: ["亯"]
};
testCase427.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亯`)
  ).toBeInTheDocument();
};
export const testCase428 = Template.bind({});
testCase428.args = {
  tasks: ["亰"]
};
testCase428.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亰`)
  ).toBeInTheDocument();
};
export const testCase429 = Template.bind({});
testCase429.args = {
  tasks: ["亱"]
};
testCase429.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亱`)
  ).toBeInTheDocument();
};
export const testCase430 = Template.bind({});
testCase430.args = {
  tasks: ["亲"]
};
testCase430.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亲`)
  ).toBeInTheDocument();
};
export const testCase431 = Template.bind({});
testCase431.args = {
  tasks: ["亳"]
};
testCase431.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亳`)
  ).toBeInTheDocument();
};
export const testCase432 = Template.bind({});
testCase432.args = {
  tasks: ["亴"]
};
testCase432.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亴`)
  ).toBeInTheDocument();
};
export const testCase433 = Template.bind({});
testCase433.args = {
  tasks: ["亵"]
};
testCase433.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亵`)
  ).toBeInTheDocument();
};
export const testCase434 = Template.bind({});
testCase434.args = {
  tasks: ["亶"]
};
testCase434.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亶`)
  ).toBeInTheDocument();
};
export const testCase435 = Template.bind({});
testCase435.args = {
  tasks: ["亷"]
};
testCase435.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亷`)
  ).toBeInTheDocument();
};
export const testCase436 = Template.bind({});
testCase436.args = {
  tasks: ["亸"]
};
testCase436.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亸`)
  ).toBeInTheDocument();
};
export const testCase437 = Template.bind({});
testCase437.args = {
  tasks: ["亹"]
};
testCase437.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亹`)
  ).toBeInTheDocument();
};
export const testCase438 = Template.bind({});
testCase438.args = {
  tasks: ["人"]
};
testCase438.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 人`)
  ).toBeInTheDocument();
};
export const testCase439 = Template.bind({});
testCase439.args = {
  tasks: ["亻"]
};
testCase439.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亻`)
  ).toBeInTheDocument();
};
export const testCase440 = Template.bind({});
testCase440.args = {
  tasks: ["亼"]
};
testCase440.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亼`)
  ).toBeInTheDocument();
};
export const testCase441 = Template.bind({});
testCase441.args = {
  tasks: ["亽"]
};
testCase441.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亽`)
  ).toBeInTheDocument();
};
export const testCase442 = Template.bind({});
testCase442.args = {
  tasks: ["亾"]
};
testCase442.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亾`)
  ).toBeInTheDocument();
};
export const testCase443 = Template.bind({});
testCase443.args = {
  tasks: ["亿"]
};
testCase443.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 亿`)
  ).toBeInTheDocument();
};
export const testCase444 = Template.bind({});
testCase444.args = {
  tasks: ["什"]
};
testCase444.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 什`)
  ).toBeInTheDocument();
};
export const testCase445 = Template.bind({});
testCase445.args = {
  tasks: ["仁"]
};
testCase445.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仁`)
  ).toBeInTheDocument();
};
export const testCase446 = Template.bind({});
testCase446.args = {
  tasks: ["仂"]
};
testCase446.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仂`)
  ).toBeInTheDocument();
};
export const testCase447 = Template.bind({});
testCase447.args = {
  tasks: ["仃"]
};
testCase447.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仃`)
  ).toBeInTheDocument();
};
export const testCase448 = Template.bind({});
testCase448.args = {
  tasks: ["仄"]
};
testCase448.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仄`)
  ).toBeInTheDocument();
};
export const testCase449 = Template.bind({});
testCase449.args = {
  tasks: ["仅"]
};
testCase449.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仅`)
  ).toBeInTheDocument();
};
export const testCase450 = Template.bind({});
testCase450.args = {
  tasks: ["仆"]
};
testCase450.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仆`)
  ).toBeInTheDocument();
};
export const testCase451 = Template.bind({});
testCase451.args = {
  tasks: ["仇"]
};
testCase451.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仇`)
  ).toBeInTheDocument();
};
export const testCase452 = Template.bind({});
testCase452.args = {
  tasks: ["仈"]
};
testCase452.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仈`)
  ).toBeInTheDocument();
};
export const testCase453 = Template.bind({});
testCase453.args = {
  tasks: ["仉"]
};
testCase453.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仉`)
  ).toBeInTheDocument();
};
export const testCase454 = Template.bind({});
testCase454.args = {
  tasks: ["今"]
};
testCase454.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 今`)
  ).toBeInTheDocument();
};
export const testCase455 = Template.bind({});
testCase455.args = {
  tasks: ["介"]
};
testCase455.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 介`)
  ).toBeInTheDocument();
};
export const testCase456 = Template.bind({});
testCase456.args = {
  tasks: ["仌"]
};
testCase456.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仌`)
  ).toBeInTheDocument();
};
export const testCase457 = Template.bind({});
testCase457.args = {
  tasks: ["仍"]
};
testCase457.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仍`)
  ).toBeInTheDocument();
};
export const testCase458 = Template.bind({});
testCase458.args = {
  tasks: ["从"]
};
testCase458.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 从`)
  ).toBeInTheDocument();
};
export const testCase459 = Template.bind({});
testCase459.args = {
  tasks: ["仏"]
};
testCase459.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仏`)
  ).toBeInTheDocument();
};
export const testCase460 = Template.bind({});
testCase460.args = {
  tasks: ["仐"]
};
testCase460.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仐`)
  ).toBeInTheDocument();
};
export const testCase461 = Template.bind({});
testCase461.args = {
  tasks: ["仑"]
};
testCase461.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仑`)
  ).toBeInTheDocument();
};
export const testCase462 = Template.bind({});
testCase462.args = {
  tasks: ["仒"]
};
testCase462.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仒`)
  ).toBeInTheDocument();
};
export const testCase463 = Template.bind({});
testCase463.args = {
  tasks: ["仓"]
};
testCase463.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仓`)
  ).toBeInTheDocument();
};
export const testCase464 = Template.bind({});
testCase464.args = {
  tasks: ["仔"]
};
testCase464.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仔`)
  ).toBeInTheDocument();
};
export const testCase465 = Template.bind({});
testCase465.args = {
  tasks: ["仕"]
};
testCase465.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仕`)
  ).toBeInTheDocument();
};
export const testCase466 = Template.bind({});
testCase466.args = {
  tasks: ["他"]
};
testCase466.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 他`)
  ).toBeInTheDocument();
};
export const testCase467 = Template.bind({});
testCase467.args = {
  tasks: ["仗"]
};
testCase467.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仗`)
  ).toBeInTheDocument();
};
export const testCase468 = Template.bind({});
testCase468.args = {
  tasks: ["付"]
};
testCase468.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 付`)
  ).toBeInTheDocument();
};
export const testCase469 = Template.bind({});
testCase469.args = {
  tasks: ["仙"]
};
testCase469.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仙`)
  ).toBeInTheDocument();
};
export const testCase470 = Template.bind({});
testCase470.args = {
  tasks: ["仚"]
};
testCase470.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仚`)
  ).toBeInTheDocument();
};
export const testCase471 = Template.bind({});
testCase471.args = {
  tasks: ["仛"]
};
testCase471.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仛`)
  ).toBeInTheDocument();
};
export const testCase472 = Template.bind({});
testCase472.args = {
  tasks: ["仜"]
};
testCase472.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仜`)
  ).toBeInTheDocument();
};
export const testCase473 = Template.bind({});
testCase473.args = {
  tasks: ["仝"]
};
testCase473.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仝`)
  ).toBeInTheDocument();
};
export const testCase474 = Template.bind({});
testCase474.args = {
  tasks: ["仞"]
};
testCase474.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仞`)
  ).toBeInTheDocument();
};
export const testCase475 = Template.bind({});
testCase475.args = {
  tasks: ["仟"]
};
testCase475.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仟`)
  ).toBeInTheDocument();
};
export const testCase476 = Template.bind({});
testCase476.args = {
  tasks: ["仠"]
};
testCase476.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仠`)
  ).toBeInTheDocument();
};
export const testCase477 = Template.bind({});
testCase477.args = {
  tasks: ["仡"]
};
testCase477.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仡`)
  ).toBeInTheDocument();
};
export const testCase478 = Template.bind({});
testCase478.args = {
  tasks: ["仢"]
};
testCase478.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仢`)
  ).toBeInTheDocument();
};
export const testCase479 = Template.bind({});
testCase479.args = {
  tasks: ["代"]
};
testCase479.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 代`)
  ).toBeInTheDocument();
};
export const testCase480 = Template.bind({});
testCase480.args = {
  tasks: ["令"]
};
testCase480.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 令`)
  ).toBeInTheDocument();
};
export const testCase481 = Template.bind({});
testCase481.args = {
  tasks: ["以"]
};
testCase481.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 以`)
  ).toBeInTheDocument();
};
export const testCase482 = Template.bind({});
testCase482.args = {
  tasks: ["仦"]
};
testCase482.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仦`)
  ).toBeInTheDocument();
};
export const testCase483 = Template.bind({});
testCase483.args = {
  tasks: ["仧"]
};
testCase483.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仧`)
  ).toBeInTheDocument();
};
export const testCase484 = Template.bind({});
testCase484.args = {
  tasks: ["仨"]
};
testCase484.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仨`)
  ).toBeInTheDocument();
};
export const testCase485 = Template.bind({});
testCase485.args = {
  tasks: ["仩"]
};
testCase485.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仩`)
  ).toBeInTheDocument();
};
export const testCase486 = Template.bind({});
testCase486.args = {
  tasks: ["仪"]
};
testCase486.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仪`)
  ).toBeInTheDocument();
};
export const testCase487 = Template.bind({});
testCase487.args = {
  tasks: ["仫"]
};
testCase487.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仫`)
  ).toBeInTheDocument();
};
export const testCase488 = Template.bind({});
testCase488.args = {
  tasks: ["们"]
};
testCase488.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 们`)
  ).toBeInTheDocument();
};
export const testCase489 = Template.bind({});
testCase489.args = {
  tasks: ["仭"]
};
testCase489.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仭`)
  ).toBeInTheDocument();
};
export const testCase490 = Template.bind({});
testCase490.args = {
  tasks: ["仮"]
};
testCase490.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仮`)
  ).toBeInTheDocument();
};
export const testCase491 = Template.bind({});
testCase491.args = {
  tasks: ["仯"]
};
testCase491.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仯`)
  ).toBeInTheDocument();
};
export const testCase492 = Template.bind({});
testCase492.args = {
  tasks: ["仰"]
};
testCase492.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仰`)
  ).toBeInTheDocument();
};
export const testCase493 = Template.bind({});
testCase493.args = {
  tasks: ["仱"]
};
testCase493.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仱`)
  ).toBeInTheDocument();
};
export const testCase494 = Template.bind({});
testCase494.args = {
  tasks: ["仲"]
};
testCase494.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仲`)
  ).toBeInTheDocument();
};
export const testCase495 = Template.bind({});
testCase495.args = {
  tasks: ["仳"]
};
testCase495.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仳`)
  ).toBeInTheDocument();
};
export const testCase496 = Template.bind({});
testCase496.args = {
  tasks: ["仴"]
};
testCase496.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仴`)
  ).toBeInTheDocument();
};
export const testCase497 = Template.bind({});
testCase497.args = {
  tasks: ["仵"]
};
testCase497.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仵`)
  ).toBeInTheDocument();
};
export const testCase498 = Template.bind({});
testCase498.args = {
  tasks: ["件"]
};
testCase498.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 件`)
  ).toBeInTheDocument();
};
export const testCase499 = Template.bind({});
testCase499.args = {
  tasks: ["价"]
};
testCase499.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 价`)
  ).toBeInTheDocument();
};
export const testCase500 = Template.bind({});
testCase500.args = {
  tasks: ["仸"]
};
testCase500.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仸`)
  ).toBeInTheDocument();
};
export const testCase501 = Template.bind({});
testCase501.args = {
  tasks: ["仹"]
};
testCase501.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仹`)
  ).toBeInTheDocument();
};
export const testCase502 = Template.bind({});
testCase502.args = {
  tasks: ["仺"]
};
testCase502.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仺`)
  ).toBeInTheDocument();
};
export const testCase503 = Template.bind({});
testCase503.args = {
  tasks: ["任"]
};
testCase503.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 任`)
  ).toBeInTheDocument();
};
export const testCase504 = Template.bind({});
testCase504.args = {
  tasks: ["仼"]
};
testCase504.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仼`)
  ).toBeInTheDocument();
};
export const testCase505 = Template.bind({});
testCase505.args = {
  tasks: ["份"]
};
testCase505.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 份`)
  ).toBeInTheDocument();
};
export const testCase506 = Template.bind({});
testCase506.args = {
  tasks: ["仾"]
};
testCase506.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仾`)
  ).toBeInTheDocument();
};
export const testCase507 = Template.bind({});
testCase507.args = {
  tasks: ["仿"]
};
testCase507.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 仿`)
  ).toBeInTheDocument();
};
export const testCase508 = Template.bind({});
testCase508.args = {
  tasks: ["伀"]
};
testCase508.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伀`)
  ).toBeInTheDocument();
};
export const testCase509 = Template.bind({});
testCase509.args = {
  tasks: ["企"]
};
testCase509.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 企`)
  ).toBeInTheDocument();
};
export const testCase510 = Template.bind({});
testCase510.args = {
  tasks: ["伂"]
};
testCase510.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伂`)
  ).toBeInTheDocument();
};
export const testCase511 = Template.bind({});
testCase511.args = {
  tasks: ["伃"]
};
testCase511.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伃`)
  ).toBeInTheDocument();
};
export const testCase512 = Template.bind({});
testCase512.args = {
  tasks: ["伄"]
};
testCase512.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伄`)
  ).toBeInTheDocument();
};
export const testCase513 = Template.bind({});
testCase513.args = {
  tasks: ["伅"]
};
testCase513.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伅`)
  ).toBeInTheDocument();
};
export const testCase514 = Template.bind({});
testCase514.args = {
  tasks: ["伆"]
};
testCase514.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伆`)
  ).toBeInTheDocument();
};
export const testCase515 = Template.bind({});
testCase515.args = {
  tasks: ["伇"]
};
testCase515.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伇`)
  ).toBeInTheDocument();
};
export const testCase516 = Template.bind({});
testCase516.args = {
  tasks: ["伈"]
};
testCase516.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伈`)
  ).toBeInTheDocument();
};
export const testCase517 = Template.bind({});
testCase517.args = {
  tasks: ["伉"]
};
testCase517.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伉`)
  ).toBeInTheDocument();
};
export const testCase518 = Template.bind({});
testCase518.args = {
  tasks: ["伊"]
};
testCase518.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伊`)
  ).toBeInTheDocument();
};
export const testCase519 = Template.bind({});
testCase519.args = {
  tasks: ["伋"]
};
testCase519.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伋`)
  ).toBeInTheDocument();
};
export const testCase520 = Template.bind({});
testCase520.args = {
  tasks: ["伌"]
};
testCase520.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伌`)
  ).toBeInTheDocument();
};
export const testCase521 = Template.bind({});
testCase521.args = {
  tasks: ["伍"]
};
testCase521.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伍`)
  ).toBeInTheDocument();
};
export const testCase522 = Template.bind({});
testCase522.args = {
  tasks: ["伎"]
};
testCase522.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伎`)
  ).toBeInTheDocument();
};
export const testCase523 = Template.bind({});
testCase523.args = {
  tasks: ["伏"]
};
testCase523.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伏`)
  ).toBeInTheDocument();
};
export const testCase524 = Template.bind({});
testCase524.args = {
  tasks: ["伐"]
};
testCase524.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伐`)
  ).toBeInTheDocument();
};
export const testCase525 = Template.bind({});
testCase525.args = {
  tasks: ["休"]
};
testCase525.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 休`)
  ).toBeInTheDocument();
};
export const testCase526 = Template.bind({});
testCase526.args = {
  tasks: ["伒"]
};
testCase526.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伒`)
  ).toBeInTheDocument();
};
export const testCase527 = Template.bind({});
testCase527.args = {
  tasks: ["伓"]
};
testCase527.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伓`)
  ).toBeInTheDocument();
};
export const testCase528 = Template.bind({});
testCase528.args = {
  tasks: ["伔"]
};
testCase528.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伔`)
  ).toBeInTheDocument();
};
export const testCase529 = Template.bind({});
testCase529.args = {
  tasks: ["伕"]
};
testCase529.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伕`)
  ).toBeInTheDocument();
};
export const testCase530 = Template.bind({});
testCase530.args = {
  tasks: ["伖"]
};
testCase530.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伖`)
  ).toBeInTheDocument();
};
export const testCase531 = Template.bind({});
testCase531.args = {
  tasks: ["众"]
};
testCase531.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 众`)
  ).toBeInTheDocument();
};
export const testCase532 = Template.bind({});
testCase532.args = {
  tasks: ["优"]
};
testCase532.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 优`)
  ).toBeInTheDocument();
};
export const testCase533 = Template.bind({});
testCase533.args = {
  tasks: ["伙"]
};
testCase533.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伙`)
  ).toBeInTheDocument();
};
export const testCase534 = Template.bind({});
testCase534.args = {
  tasks: ["会"]
};
testCase534.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 会`)
  ).toBeInTheDocument();
};
export const testCase535 = Template.bind({});
testCase535.args = {
  tasks: ["伛"]
};
testCase535.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伛`)
  ).toBeInTheDocument();
};
export const testCase536 = Template.bind({});
testCase536.args = {
  tasks: ["伜"]
};
testCase536.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伜`)
  ).toBeInTheDocument();
};
export const testCase537 = Template.bind({});
testCase537.args = {
  tasks: ["伝"]
};
testCase537.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伝`)
  ).toBeInTheDocument();
};
export const testCase538 = Template.bind({});
testCase538.args = {
  tasks: ["伞"]
};
testCase538.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伞`)
  ).toBeInTheDocument();
};
export const testCase539 = Template.bind({});
testCase539.args = {
  tasks: ["伟"]
};
testCase539.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伟`)
  ).toBeInTheDocument();
};
export const testCase540 = Template.bind({});
testCase540.args = {
  tasks: ["传"]
};
testCase540.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 传`)
  ).toBeInTheDocument();
};
export const testCase541 = Template.bind({});
testCase541.args = {
  tasks: ["伡"]
};
testCase541.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伡`)
  ).toBeInTheDocument();
};
export const testCase542 = Template.bind({});
testCase542.args = {
  tasks: ["伢"]
};
testCase542.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伢`)
  ).toBeInTheDocument();
};
export const testCase543 = Template.bind({});
testCase543.args = {
  tasks: ["伣"]
};
testCase543.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伣`)
  ).toBeInTheDocument();
};
export const testCase544 = Template.bind({});
testCase544.args = {
  tasks: ["伤"]
};
testCase544.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伤`)
  ).toBeInTheDocument();
};
export const testCase545 = Template.bind({});
testCase545.args = {
  tasks: ["伥"]
};
testCase545.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伥`)
  ).toBeInTheDocument();
};
export const testCase546 = Template.bind({});
testCase546.args = {
  tasks: ["伦"]
};
testCase546.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伦`)
  ).toBeInTheDocument();
};
export const testCase547 = Template.bind({});
testCase547.args = {
  tasks: ["伧"]
};
testCase547.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伧`)
  ).toBeInTheDocument();
};
export const testCase548 = Template.bind({});
testCase548.args = {
  tasks: ["伨"]
};
testCase548.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伨`)
  ).toBeInTheDocument();
};
export const testCase549 = Template.bind({});
testCase549.args = {
  tasks: ["伩"]
};
testCase549.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伩`)
  ).toBeInTheDocument();
};
export const testCase550 = Template.bind({});
testCase550.args = {
  tasks: ["伪"]
};
testCase550.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伪`)
  ).toBeInTheDocument();
};
export const testCase551 = Template.bind({});
testCase551.args = {
  tasks: ["伫"]
};
testCase551.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伫`)
  ).toBeInTheDocument();
};
export const testCase552 = Template.bind({});
testCase552.args = {
  tasks: ["伬"]
};
testCase552.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伬`)
  ).toBeInTheDocument();
};
export const testCase553 = Template.bind({});
testCase553.args = {
  tasks: ["伭"]
};
testCase553.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伭`)
  ).toBeInTheDocument();
};
export const testCase554 = Template.bind({});
testCase554.args = {
  tasks: ["伮"]
};
testCase554.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伮`)
  ).toBeInTheDocument();
};
export const testCase555 = Template.bind({});
testCase555.args = {
  tasks: ["伯"]
};
testCase555.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伯`)
  ).toBeInTheDocument();
};
export const testCase556 = Template.bind({});
testCase556.args = {
  tasks: ["估"]
};
testCase556.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 估`)
  ).toBeInTheDocument();
};
export const testCase557 = Template.bind({});
testCase557.args = {
  tasks: ["伱"]
};
testCase557.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伱`)
  ).toBeInTheDocument();
};
export const testCase558 = Template.bind({});
testCase558.args = {
  tasks: ["伲"]
};
testCase558.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伲`)
  ).toBeInTheDocument();
};
export const testCase559 = Template.bind({});
testCase559.args = {
  tasks: ["伳"]
};
testCase559.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伳`)
  ).toBeInTheDocument();
};
export const testCase560 = Template.bind({});
testCase560.args = {
  tasks: ["伴"]
};
testCase560.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伴`)
  ).toBeInTheDocument();
};
export const testCase561 = Template.bind({});
testCase561.args = {
  tasks: ["伵"]
};
testCase561.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伵`)
  ).toBeInTheDocument();
};
export const testCase562 = Template.bind({});
testCase562.args = {
  tasks: ["伶"]
};
testCase562.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伶`)
  ).toBeInTheDocument();
};
export const testCase563 = Template.bind({});
testCase563.args = {
  tasks: ["伷"]
};
testCase563.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伷`)
  ).toBeInTheDocument();
};
export const testCase564 = Template.bind({});
testCase564.args = {
  tasks: ["伸"]
};
testCase564.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伸`)
  ).toBeInTheDocument();
};
export const testCase565 = Template.bind({});
testCase565.args = {
  tasks: ["伹"]
};
testCase565.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伹`)
  ).toBeInTheDocument();
};
export const testCase566 = Template.bind({});
testCase566.args = {
  tasks: ["伺"]
};
testCase566.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伺`)
  ).toBeInTheDocument();
};
export const testCase567 = Template.bind({});
testCase567.args = {
  tasks: ["伻"]
};
testCase567.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伻`)
  ).toBeInTheDocument();
};
export const testCase568 = Template.bind({});
testCase568.args = {
  tasks: ["似"]
};
testCase568.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 似`)
  ).toBeInTheDocument();
};
export const testCase569 = Template.bind({});
testCase569.args = {
  tasks: ["伽"]
};
testCase569.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伽`)
  ).toBeInTheDocument();
};
export const testCase570 = Template.bind({});
testCase570.args = {
  tasks: ["伾"]
};
testCase570.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伾`)
  ).toBeInTheDocument();
};
export const testCase571 = Template.bind({});
testCase571.args = {
  tasks: ["伿"]
};
testCase571.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 伿`)
  ).toBeInTheDocument();
};
export const testCase572 = Template.bind({});
testCase572.args = {
  tasks: ["佀"]
};
testCase572.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佀`)
  ).toBeInTheDocument();
};
export const testCase573 = Template.bind({});
testCase573.args = {
  tasks: ["佁"]
};
testCase573.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佁`)
  ).toBeInTheDocument();
};
export const testCase574 = Template.bind({});
testCase574.args = {
  tasks: ["佂"]
};
testCase574.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佂`)
  ).toBeInTheDocument();
};
export const testCase575 = Template.bind({});
testCase575.args = {
  tasks: ["佃"]
};
testCase575.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佃`)
  ).toBeInTheDocument();
};
export const testCase576 = Template.bind({});
testCase576.args = {
  tasks: ["佄"]
};
testCase576.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佄`)
  ).toBeInTheDocument();
};
export const testCase577 = Template.bind({});
testCase577.args = {
  tasks: ["佅"]
};
testCase577.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佅`)
  ).toBeInTheDocument();
};
export const testCase578 = Template.bind({});
testCase578.args = {
  tasks: ["但"]
};
testCase578.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 但`)
  ).toBeInTheDocument();
};
export const testCase579 = Template.bind({});
testCase579.args = {
  tasks: ["佇"]
};
testCase579.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佇`)
  ).toBeInTheDocument();
};
export const testCase580 = Template.bind({});
testCase580.args = {
  tasks: ["佈"]
};
testCase580.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佈`)
  ).toBeInTheDocument();
};
export const testCase581 = Template.bind({});
testCase581.args = {
  tasks: ["佉"]
};
testCase581.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佉`)
  ).toBeInTheDocument();
};
export const testCase582 = Template.bind({});
testCase582.args = {
  tasks: ["佊"]
};
testCase582.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佊`)
  ).toBeInTheDocument();
};
export const testCase583 = Template.bind({});
testCase583.args = {
  tasks: ["佋"]
};
testCase583.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佋`)
  ).toBeInTheDocument();
};
export const testCase584 = Template.bind({});
testCase584.args = {
  tasks: ["佌"]
};
testCase584.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佌`)
  ).toBeInTheDocument();
};
export const testCase585 = Template.bind({});
testCase585.args = {
  tasks: ["位"]
};
testCase585.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 位`)
  ).toBeInTheDocument();
};
export const testCase586 = Template.bind({});
testCase586.args = {
  tasks: ["低"]
};
testCase586.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 低`)
  ).toBeInTheDocument();
};
export const testCase587 = Template.bind({});
testCase587.args = {
  tasks: ["住"]
};
testCase587.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 住`)
  ).toBeInTheDocument();
};
export const testCase588 = Template.bind({});
testCase588.args = {
  tasks: ["佐"]
};
testCase588.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佐`)
  ).toBeInTheDocument();
};
export const testCase589 = Template.bind({});
testCase589.args = {
  tasks: ["佑"]
};
testCase589.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佑`)
  ).toBeInTheDocument();
};
export const testCase590 = Template.bind({});
testCase590.args = {
  tasks: ["佒"]
};
testCase590.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佒`)
  ).toBeInTheDocument();
};
export const testCase591 = Template.bind({});
testCase591.args = {
  tasks: ["体"]
};
testCase591.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 体`)
  ).toBeInTheDocument();
};
export const testCase592 = Template.bind({});
testCase592.args = {
  tasks: ["佔"]
};
testCase592.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佔`)
  ).toBeInTheDocument();
};
export const testCase593 = Template.bind({});
testCase593.args = {
  tasks: ["何"]
};
testCase593.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 何`)
  ).toBeInTheDocument();
};
export const testCase594 = Template.bind({});
testCase594.args = {
  tasks: ["佖"]
};
testCase594.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佖`)
  ).toBeInTheDocument();
};
export const testCase595 = Template.bind({});
testCase595.args = {
  tasks: ["佗"]
};
testCase595.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佗`)
  ).toBeInTheDocument();
};
export const testCase596 = Template.bind({});
testCase596.args = {
  tasks: ["佘"]
};
testCase596.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佘`)
  ).toBeInTheDocument();
};
export const testCase597 = Template.bind({});
testCase597.args = {
  tasks: ["余"]
};
testCase597.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 余`)
  ).toBeInTheDocument();
};
export const testCase598 = Template.bind({});
testCase598.args = {
  tasks: ["佚"]
};
testCase598.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佚`)
  ).toBeInTheDocument();
};
export const testCase599 = Template.bind({});
testCase599.args = {
  tasks: ["佛"]
};
testCase599.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佛`)
  ).toBeInTheDocument();
};
export const testCase600 = Template.bind({});
testCase600.args = {
  tasks: ["作"]
};
testCase600.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 作`)
  ).toBeInTheDocument();
};
export const testCase601 = Template.bind({});
testCase601.args = {
  tasks: ["佝"]
};
testCase601.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佝`)
  ).toBeInTheDocument();
};
export const testCase602 = Template.bind({});
testCase602.args = {
  tasks: ["佞"]
};
testCase602.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佞`)
  ).toBeInTheDocument();
};
export const testCase603 = Template.bind({});
testCase603.args = {
  tasks: ["佟"]
};
testCase603.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佟`)
  ).toBeInTheDocument();
};
export const testCase604 = Template.bind({});
testCase604.args = {
  tasks: ["你"]
};
testCase604.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 你`)
  ).toBeInTheDocument();
};
export const testCase605 = Template.bind({});
testCase605.args = {
  tasks: ["佡"]
};
testCase605.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佡`)
  ).toBeInTheDocument();
};
export const testCase606 = Template.bind({});
testCase606.args = {
  tasks: ["佢"]
};
testCase606.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佢`)
  ).toBeInTheDocument();
};
export const testCase607 = Template.bind({});
testCase607.args = {
  tasks: ["佣"]
};
testCase607.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佣`)
  ).toBeInTheDocument();
};
export const testCase608 = Template.bind({});
testCase608.args = {
  tasks: ["佤"]
};
testCase608.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佤`)
  ).toBeInTheDocument();
};
export const testCase609 = Template.bind({});
testCase609.args = {
  tasks: ["佥"]
};
testCase609.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佥`)
  ).toBeInTheDocument();
};
export const testCase610 = Template.bind({});
testCase610.args = {
  tasks: ["佦"]
};
testCase610.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佦`)
  ).toBeInTheDocument();
};
export const testCase611 = Template.bind({});
testCase611.args = {
  tasks: ["佧"]
};
testCase611.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佧`)
  ).toBeInTheDocument();
};
export const testCase612 = Template.bind({});
testCase612.args = {
  tasks: ["佨"]
};
testCase612.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佨`)
  ).toBeInTheDocument();
};
export const testCase613 = Template.bind({});
testCase613.args = {
  tasks: ["佩"]
};
testCase613.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佩`)
  ).toBeInTheDocument();
};
export const testCase614 = Template.bind({});
testCase614.args = {
  tasks: ["佪"]
};
testCase614.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佪`)
  ).toBeInTheDocument();
};
export const testCase615 = Template.bind({});
testCase615.args = {
  tasks: ["佫"]
};
testCase615.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佫`)
  ).toBeInTheDocument();
};
export const testCase616 = Template.bind({});
testCase616.args = {
  tasks: ["佬"]
};
testCase616.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佬`)
  ).toBeInTheDocument();
};
export const testCase617 = Template.bind({});
testCase617.args = {
  tasks: ["佭"]
};
testCase617.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佭`)
  ).toBeInTheDocument();
};
export const testCase618 = Template.bind({});
testCase618.args = {
  tasks: ["佮"]
};
testCase618.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佮`)
  ).toBeInTheDocument();
};
export const testCase619 = Template.bind({});
testCase619.args = {
  tasks: ["佯"]
};
testCase619.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佯`)
  ).toBeInTheDocument();
};
export const testCase620 = Template.bind({});
testCase620.args = {
  tasks: ["佰"]
};
testCase620.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佰`)
  ).toBeInTheDocument();
};
export const testCase621 = Template.bind({});
testCase621.args = {
  tasks: ["佱"]
};
testCase621.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佱`)
  ).toBeInTheDocument();
};
export const testCase622 = Template.bind({});
testCase622.args = {
  tasks: ["佲"]
};
testCase622.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佲`)
  ).toBeInTheDocument();
};
export const testCase623 = Template.bind({});
testCase623.args = {
  tasks: ["佳"]
};
testCase623.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佳`)
  ).toBeInTheDocument();
};
export const testCase624 = Template.bind({});
testCase624.args = {
  tasks: ["佴"]
};
testCase624.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佴`)
  ).toBeInTheDocument();
};
export const testCase625 = Template.bind({});
testCase625.args = {
  tasks: ["併"]
};
testCase625.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 併`)
  ).toBeInTheDocument();
};
export const testCase626 = Template.bind({});
testCase626.args = {
  tasks: ["佶"]
};
testCase626.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佶`)
  ).toBeInTheDocument();
};
export const testCase627 = Template.bind({});
testCase627.args = {
  tasks: ["佷"]
};
testCase627.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佷`)
  ).toBeInTheDocument();
};
export const testCase628 = Template.bind({});
testCase628.args = {
  tasks: ["佸"]
};
testCase628.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佸`)
  ).toBeInTheDocument();
};
export const testCase629 = Template.bind({});
testCase629.args = {
  tasks: ["佹"]
};
testCase629.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佹`)
  ).toBeInTheDocument();
};
export const testCase630 = Template.bind({});
testCase630.args = {
  tasks: ["佺"]
};
testCase630.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佺`)
  ).toBeInTheDocument();
};
export const testCase631 = Template.bind({});
testCase631.args = {
  tasks: ["佻"]
};
testCase631.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佻`)
  ).toBeInTheDocument();
};
export const testCase632 = Template.bind({});
testCase632.args = {
  tasks: ["佼"]
};
testCase632.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佼`)
  ).toBeInTheDocument();
};
export const testCase633 = Template.bind({});
testCase633.args = {
  tasks: ["佽"]
};
testCase633.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佽`)
  ).toBeInTheDocument();
};
export const testCase634 = Template.bind({});
testCase634.args = {
  tasks: ["佾"]
};
testCase634.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 佾`)
  ).toBeInTheDocument();
};
export const testCase635 = Template.bind({});
testCase635.args = {
  tasks: ["使"]
};
testCase635.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 使`)
  ).toBeInTheDocument();
};
export const testCase636 = Template.bind({});
testCase636.args = {
  tasks: ["侀"]
};
testCase636.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侀`)
  ).toBeInTheDocument();
};
export const testCase637 = Template.bind({});
testCase637.args = {
  tasks: ["侁"]
};
testCase637.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侁`)
  ).toBeInTheDocument();
};
export const testCase638 = Template.bind({});
testCase638.args = {
  tasks: ["侂"]
};
testCase638.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侂`)
  ).toBeInTheDocument();
};
export const testCase639 = Template.bind({});
testCase639.args = {
  tasks: ["侃"]
};
testCase639.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侃`)
  ).toBeInTheDocument();
};
export const testCase640 = Template.bind({});
testCase640.args = {
  tasks: ["侄"]
};
testCase640.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侄`)
  ).toBeInTheDocument();
};
export const testCase641 = Template.bind({});
testCase641.args = {
  tasks: ["侅"]
};
testCase641.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侅`)
  ).toBeInTheDocument();
};
export const testCase642 = Template.bind({});
testCase642.args = {
  tasks: ["來"]
};
testCase642.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 來`)
  ).toBeInTheDocument();
};
export const testCase643 = Template.bind({});
testCase643.args = {
  tasks: ["侇"]
};
testCase643.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侇`)
  ).toBeInTheDocument();
};
export const testCase644 = Template.bind({});
testCase644.args = {
  tasks: ["侈"]
};
testCase644.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侈`)
  ).toBeInTheDocument();
};
export const testCase645 = Template.bind({});
testCase645.args = {
  tasks: ["侉"]
};
testCase645.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侉`)
  ).toBeInTheDocument();
};
export const testCase646 = Template.bind({});
testCase646.args = {
  tasks: ["侊"]
};
testCase646.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侊`)
  ).toBeInTheDocument();
};
export const testCase647 = Template.bind({});
testCase647.args = {
  tasks: ["例"]
};
testCase647.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 例`)
  ).toBeInTheDocument();
};
export const testCase648 = Template.bind({});
testCase648.args = {
  tasks: ["侌"]
};
testCase648.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侌`)
  ).toBeInTheDocument();
};
export const testCase649 = Template.bind({});
testCase649.args = {
  tasks: ["侍"]
};
testCase649.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侍`)
  ).toBeInTheDocument();
};
export const testCase650 = Template.bind({});
testCase650.args = {
  tasks: ["侎"]
};
testCase650.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侎`)
  ).toBeInTheDocument();
};
export const testCase651 = Template.bind({});
testCase651.args = {
  tasks: ["侏"]
};
testCase651.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侏`)
  ).toBeInTheDocument();
};
export const testCase652 = Template.bind({});
testCase652.args = {
  tasks: ["侐"]
};
testCase652.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侐`)
  ).toBeInTheDocument();
};
export const testCase653 = Template.bind({});
testCase653.args = {
  tasks: ["侑"]
};
testCase653.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侑`)
  ).toBeInTheDocument();
};
export const testCase654 = Template.bind({});
testCase654.args = {
  tasks: ["侒"]
};
testCase654.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侒`)
  ).toBeInTheDocument();
};
export const testCase655 = Template.bind({});
testCase655.args = {
  tasks: ["侓"]
};
testCase655.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侓`)
  ).toBeInTheDocument();
};
export const testCase656 = Template.bind({});
testCase656.args = {
  tasks: ["侔"]
};
testCase656.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侔`)
  ).toBeInTheDocument();
};
export const testCase657 = Template.bind({});
testCase657.args = {
  tasks: ["侕"]
};
testCase657.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侕`)
  ).toBeInTheDocument();
};
export const testCase658 = Template.bind({});
testCase658.args = {
  tasks: ["侖"]
};
testCase658.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侖`)
  ).toBeInTheDocument();
};
export const testCase659 = Template.bind({});
testCase659.args = {
  tasks: ["侗"]
};
testCase659.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侗`)
  ).toBeInTheDocument();
};
export const testCase660 = Template.bind({});
testCase660.args = {
  tasks: ["侘"]
};
testCase660.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侘`)
  ).toBeInTheDocument();
};
export const testCase661 = Template.bind({});
testCase661.args = {
  tasks: ["侙"]
};
testCase661.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侙`)
  ).toBeInTheDocument();
};
export const testCase662 = Template.bind({});
testCase662.args = {
  tasks: ["侚"]
};
testCase662.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侚`)
  ).toBeInTheDocument();
};
export const testCase663 = Template.bind({});
testCase663.args = {
  tasks: ["供"]
};
testCase663.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 供`)
  ).toBeInTheDocument();
};
export const testCase664 = Template.bind({});
testCase664.args = {
  tasks: ["侜"]
};
testCase664.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侜`)
  ).toBeInTheDocument();
};
export const testCase665 = Template.bind({});
testCase665.args = {
  tasks: ["依"]
};
testCase665.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 依`)
  ).toBeInTheDocument();
};
export const testCase666 = Template.bind({});
testCase666.args = {
  tasks: ["侞"]
};
testCase666.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侞`)
  ).toBeInTheDocument();
};
export const testCase667 = Template.bind({});
testCase667.args = {
  tasks: ["侟"]
};
testCase667.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侟`)
  ).toBeInTheDocument();
};
export const testCase668 = Template.bind({});
testCase668.args = {
  tasks: ["侠"]
};
testCase668.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侠`)
  ).toBeInTheDocument();
};
export const testCase669 = Template.bind({});
testCase669.args = {
  tasks: ["価"]
};
testCase669.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 価`)
  ).toBeInTheDocument();
};
export const testCase670 = Template.bind({});
testCase670.args = {
  tasks: ["侢"]
};
testCase670.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侢`)
  ).toBeInTheDocument();
};
export const testCase671 = Template.bind({});
testCase671.args = {
  tasks: ["侣"]
};
testCase671.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侣`)
  ).toBeInTheDocument();
};
export const testCase672 = Template.bind({});
testCase672.args = {
  tasks: ["侤"]
};
testCase672.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侤`)
  ).toBeInTheDocument();
};
export const testCase673 = Template.bind({});
testCase673.args = {
  tasks: ["侥"]
};
testCase673.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侥`)
  ).toBeInTheDocument();
};
export const testCase674 = Template.bind({});
testCase674.args = {
  tasks: ["侦"]
};
testCase674.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侦`)
  ).toBeInTheDocument();
};
export const testCase675 = Template.bind({});
testCase675.args = {
  tasks: ["侧"]
};
testCase675.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侧`)
  ).toBeInTheDocument();
};
export const testCase676 = Template.bind({});
testCase676.args = {
  tasks: ["侨"]
};
testCase676.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侨`)
  ).toBeInTheDocument();
};
export const testCase677 = Template.bind({});
testCase677.args = {
  tasks: ["侩"]
};
testCase677.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侩`)
  ).toBeInTheDocument();
};
export const testCase678 = Template.bind({});
testCase678.args = {
  tasks: ["侪"]
};
testCase678.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侪`)
  ).toBeInTheDocument();
};
export const testCase679 = Template.bind({});
testCase679.args = {
  tasks: ["侫"]
};
testCase679.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侫`)
  ).toBeInTheDocument();
};
export const testCase680 = Template.bind({});
testCase680.args = {
  tasks: ["侬"]
};
testCase680.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侬`)
  ).toBeInTheDocument();
};
export const testCase681 = Template.bind({});
testCase681.args = {
  tasks: ["侭"]
};
testCase681.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侭`)
  ).toBeInTheDocument();
};
export const testCase682 = Template.bind({});
testCase682.args = {
  tasks: ["侮"]
};
testCase682.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侮`)
  ).toBeInTheDocument();
};
export const testCase683 = Template.bind({});
testCase683.args = {
  tasks: ["侯"]
};
testCase683.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侯`)
  ).toBeInTheDocument();
};
export const testCase684 = Template.bind({});
testCase684.args = {
  tasks: ["侰"]
};
testCase684.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侰`)
  ).toBeInTheDocument();
};
export const testCase685 = Template.bind({});
testCase685.args = {
  tasks: ["侱"]
};
testCase685.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侱`)
  ).toBeInTheDocument();
};
export const testCase686 = Template.bind({});
testCase686.args = {
  tasks: ["侲"]
};
testCase686.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侲`)
  ).toBeInTheDocument();
};
export const testCase687 = Template.bind({});
testCase687.args = {
  tasks: ["侳"]
};
testCase687.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侳`)
  ).toBeInTheDocument();
};
export const testCase688 = Template.bind({});
testCase688.args = {
  tasks: ["侴"]
};
testCase688.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侴`)
  ).toBeInTheDocument();
};
export const testCase689 = Template.bind({});
testCase689.args = {
  tasks: ["侵"]
};
testCase689.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侵`)
  ).toBeInTheDocument();
};
export const testCase690 = Template.bind({});
testCase690.args = {
  tasks: ["侶"]
};
testCase690.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侶`)
  ).toBeInTheDocument();
};
export const testCase691 = Template.bind({});
testCase691.args = {
  tasks: ["侷"]
};
testCase691.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侷`)
  ).toBeInTheDocument();
};
export const testCase692 = Template.bind({});
testCase692.args = {
  tasks: ["侸"]
};
testCase692.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侸`)
  ).toBeInTheDocument();
};
export const testCase693 = Template.bind({});
testCase693.args = {
  tasks: ["侹"]
};
testCase693.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侹`)
  ).toBeInTheDocument();
};
export const testCase694 = Template.bind({});
testCase694.args = {
  tasks: ["侺"]
};
testCase694.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侺`)
  ).toBeInTheDocument();
};
export const testCase695 = Template.bind({});
testCase695.args = {
  tasks: ["侻"]
};
testCase695.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侻`)
  ).toBeInTheDocument();
};
export const testCase696 = Template.bind({});
testCase696.args = {
  tasks: ["侼"]
};
testCase696.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侼`)
  ).toBeInTheDocument();
};
export const testCase697 = Template.bind({});
testCase697.args = {
  tasks: ["侽"]
};
testCase697.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侽`)
  ).toBeInTheDocument();
};
export const testCase698 = Template.bind({});
testCase698.args = {
  tasks: ["侾"]
};
testCase698.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 侾`)
  ).toBeInTheDocument();
};
export const testCase699 = Template.bind({});
testCase699.args = {
  tasks: ["便"]
};
testCase699.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 便`)
  ).toBeInTheDocument();
};
export const testCase700 = Template.bind({});
testCase700.args = {
  tasks: ["俀"]
};
testCase700.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俀`)
  ).toBeInTheDocument();
};
export const testCase701 = Template.bind({});
testCase701.args = {
  tasks: ["俁"]
};
testCase701.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俁`)
  ).toBeInTheDocument();
};
export const testCase702 = Template.bind({});
testCase702.args = {
  tasks: ["係"]
};
testCase702.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 係`)
  ).toBeInTheDocument();
};
export const testCase703 = Template.bind({});
testCase703.args = {
  tasks: ["促"]
};
testCase703.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 促`)
  ).toBeInTheDocument();
};
export const testCase704 = Template.bind({});
testCase704.args = {
  tasks: ["俄"]
};
testCase704.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俄`)
  ).toBeInTheDocument();
};
export const testCase705 = Template.bind({});
testCase705.args = {
  tasks: ["俅"]
};
testCase705.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俅`)
  ).toBeInTheDocument();
};
export const testCase706 = Template.bind({});
testCase706.args = {
  tasks: ["俆"]
};
testCase706.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俆`)
  ).toBeInTheDocument();
};
export const testCase707 = Template.bind({});
testCase707.args = {
  tasks: ["俇"]
};
testCase707.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俇`)
  ).toBeInTheDocument();
};
export const testCase708 = Template.bind({});
testCase708.args = {
  tasks: ["俈"]
};
testCase708.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俈`)
  ).toBeInTheDocument();
};
export const testCase709 = Template.bind({});
testCase709.args = {
  tasks: ["俉"]
};
testCase709.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俉`)
  ).toBeInTheDocument();
};
export const testCase710 = Template.bind({});
testCase710.args = {
  tasks: ["俊"]
};
testCase710.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俊`)
  ).toBeInTheDocument();
};
export const testCase711 = Template.bind({});
testCase711.args = {
  tasks: ["俋"]
};
testCase711.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俋`)
  ).toBeInTheDocument();
};
export const testCase712 = Template.bind({});
testCase712.args = {
  tasks: ["俌"]
};
testCase712.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俌`)
  ).toBeInTheDocument();
};
export const testCase713 = Template.bind({});
testCase713.args = {
  tasks: ["俍"]
};
testCase713.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俍`)
  ).toBeInTheDocument();
};
export const testCase714 = Template.bind({});
testCase714.args = {
  tasks: ["俎"]
};
testCase714.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俎`)
  ).toBeInTheDocument();
};
export const testCase715 = Template.bind({});
testCase715.args = {
  tasks: ["俏"]
};
testCase715.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俏`)
  ).toBeInTheDocument();
};
export const testCase716 = Template.bind({});
testCase716.args = {
  tasks: ["俐"]
};
testCase716.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俐`)
  ).toBeInTheDocument();
};
export const testCase717 = Template.bind({});
testCase717.args = {
  tasks: ["俑"]
};
testCase717.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俑`)
  ).toBeInTheDocument();
};
export const testCase718 = Template.bind({});
testCase718.args = {
  tasks: ["俒"]
};
testCase718.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俒`)
  ).toBeInTheDocument();
};
export const testCase719 = Template.bind({});
testCase719.args = {
  tasks: ["俓"]
};
testCase719.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俓`)
  ).toBeInTheDocument();
};
export const testCase720 = Template.bind({});
testCase720.args = {
  tasks: ["俔"]
};
testCase720.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俔`)
  ).toBeInTheDocument();
};
export const testCase721 = Template.bind({});
testCase721.args = {
  tasks: ["俕"]
};
testCase721.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俕`)
  ).toBeInTheDocument();
};
export const testCase722 = Template.bind({});
testCase722.args = {
  tasks: ["俖"]
};
testCase722.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俖`)
  ).toBeInTheDocument();
};
export const testCase723 = Template.bind({});
testCase723.args = {
  tasks: ["俗"]
};
testCase723.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俗`)
  ).toBeInTheDocument();
};
export const testCase724 = Template.bind({});
testCase724.args = {
  tasks: ["俘"]
};
testCase724.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俘`)
  ).toBeInTheDocument();
};
export const testCase725 = Template.bind({});
testCase725.args = {
  tasks: ["俙"]
};
testCase725.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俙`)
  ).toBeInTheDocument();
};
export const testCase726 = Template.bind({});
testCase726.args = {
  tasks: ["俚"]
};
testCase726.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俚`)
  ).toBeInTheDocument();
};
export const testCase727 = Template.bind({});
testCase727.args = {
  tasks: ["俛"]
};
testCase727.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俛`)
  ).toBeInTheDocument();
};
export const testCase728 = Template.bind({});
testCase728.args = {
  tasks: ["俜"]
};
testCase728.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俜`)
  ).toBeInTheDocument();
};
export const testCase729 = Template.bind({});
testCase729.args = {
  tasks: ["保"]
};
testCase729.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 保`)
  ).toBeInTheDocument();
};
export const testCase730 = Template.bind({});
testCase730.args = {
  tasks: ["俞"]
};
testCase730.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俞`)
  ).toBeInTheDocument();
};
export const testCase731 = Template.bind({});
testCase731.args = {
  tasks: ["俟"]
};
testCase731.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俟`)
  ).toBeInTheDocument();
};
export const testCase732 = Template.bind({});
testCase732.args = {
  tasks: ["俠"]
};
testCase732.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俠`)
  ).toBeInTheDocument();
};
export const testCase733 = Template.bind({});
testCase733.args = {
  tasks: ["信"]
};
testCase733.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 信`)
  ).toBeInTheDocument();
};
export const testCase734 = Template.bind({});
testCase734.args = {
  tasks: ["俢"]
};
testCase734.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俢`)
  ).toBeInTheDocument();
};
export const testCase735 = Template.bind({});
testCase735.args = {
  tasks: ["俣"]
};
testCase735.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俣`)
  ).toBeInTheDocument();
};
export const testCase736 = Template.bind({});
testCase736.args = {
  tasks: ["俤"]
};
testCase736.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俤`)
  ).toBeInTheDocument();
};
export const testCase737 = Template.bind({});
testCase737.args = {
  tasks: ["俥"]
};
testCase737.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俥`)
  ).toBeInTheDocument();
};
export const testCase738 = Template.bind({});
testCase738.args = {
  tasks: ["俦"]
};
testCase738.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俦`)
  ).toBeInTheDocument();
};
export const testCase739 = Template.bind({});
testCase739.args = {
  tasks: ["俧"]
};
testCase739.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俧`)
  ).toBeInTheDocument();
};
export const testCase740 = Template.bind({});
testCase740.args = {
  tasks: ["俨"]
};
testCase740.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俨`)
  ).toBeInTheDocument();
};
export const testCase741 = Template.bind({});
testCase741.args = {
  tasks: ["俩"]
};
testCase741.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俩`)
  ).toBeInTheDocument();
};
export const testCase742 = Template.bind({});
testCase742.args = {
  tasks: ["俪"]
};
testCase742.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俪`)
  ).toBeInTheDocument();
};
export const testCase743 = Template.bind({});
testCase743.args = {
  tasks: ["俫"]
};
testCase743.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俫`)
  ).toBeInTheDocument();
};
export const testCase744 = Template.bind({});
testCase744.args = {
  tasks: ["俬"]
};
testCase744.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俬`)
  ).toBeInTheDocument();
};
export const testCase745 = Template.bind({});
testCase745.args = {
  tasks: ["俭"]
};
testCase745.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俭`)
  ).toBeInTheDocument();
};
export const testCase746 = Template.bind({});
testCase746.args = {
  tasks: ["修"]
};
testCase746.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 修`)
  ).toBeInTheDocument();
};
export const testCase747 = Template.bind({});
testCase747.args = {
  tasks: ["俯"]
};
testCase747.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俯`)
  ).toBeInTheDocument();
};
export const testCase748 = Template.bind({});
testCase748.args = {
  tasks: ["俰"]
};
testCase748.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俰`)
  ).toBeInTheDocument();
};
export const testCase749 = Template.bind({});
testCase749.args = {
  tasks: ["俱"]
};
testCase749.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俱`)
  ).toBeInTheDocument();
};
export const testCase750 = Template.bind({});
testCase750.args = {
  tasks: ["俲"]
};
testCase750.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俲`)
  ).toBeInTheDocument();
};
export const testCase751 = Template.bind({});
testCase751.args = {
  tasks: ["俳"]
};
testCase751.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俳`)
  ).toBeInTheDocument();
};
export const testCase752 = Template.bind({});
testCase752.args = {
  tasks: ["俴"]
};
testCase752.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俴`)
  ).toBeInTheDocument();
};
export const testCase753 = Template.bind({});
testCase753.args = {
  tasks: ["俵"]
};
testCase753.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俵`)
  ).toBeInTheDocument();
};
export const testCase754 = Template.bind({});
testCase754.args = {
  tasks: ["俶"]
};
testCase754.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俶`)
  ).toBeInTheDocument();
};
export const testCase755 = Template.bind({});
testCase755.args = {
  tasks: ["俷"]
};
testCase755.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俷`)
  ).toBeInTheDocument();
};
export const testCase756 = Template.bind({});
testCase756.args = {
  tasks: ["俸"]
};
testCase756.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俸`)
  ).toBeInTheDocument();
};
export const testCase757 = Template.bind({});
testCase757.args = {
  tasks: ["俹"]
};
testCase757.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俹`)
  ).toBeInTheDocument();
};
export const testCase758 = Template.bind({});
testCase758.args = {
  tasks: ["俺"]
};
testCase758.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俺`)
  ).toBeInTheDocument();
};
export const testCase759 = Template.bind({});
testCase759.args = {
  tasks: ["俻"]
};
testCase759.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俻`)
  ).toBeInTheDocument();
};
export const testCase760 = Template.bind({});
testCase760.args = {
  tasks: ["俼"]
};
testCase760.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俼`)
  ).toBeInTheDocument();
};
export const testCase761 = Template.bind({});
testCase761.args = {
  tasks: ["俽"]
};
testCase761.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俽`)
  ).toBeInTheDocument();
};
export const testCase762 = Template.bind({});
testCase762.args = {
  tasks: ["俾"]
};
testCase762.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俾`)
  ).toBeInTheDocument();
};
export const testCase763 = Template.bind({});
testCase763.args = {
  tasks: ["俿"]
};
testCase763.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 俿`)
  ).toBeInTheDocument();
};
export const testCase764 = Template.bind({});
testCase764.args = {
  tasks: ["倀"]
};
testCase764.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倀`)
  ).toBeInTheDocument();
};
export const testCase765 = Template.bind({});
testCase765.args = {
  tasks: ["倁"]
};
testCase765.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倁`)
  ).toBeInTheDocument();
};
export const testCase766 = Template.bind({});
testCase766.args = {
  tasks: ["倂"]
};
testCase766.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倂`)
  ).toBeInTheDocument();
};
export const testCase767 = Template.bind({});
testCase767.args = {
  tasks: ["倃"]
};
testCase767.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倃`)
  ).toBeInTheDocument();
};
export const testCase768 = Template.bind({});
testCase768.args = {
  tasks: ["倄"]
};
testCase768.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倄`)
  ).toBeInTheDocument();
};
export const testCase769 = Template.bind({});
testCase769.args = {
  tasks: ["倅"]
};
testCase769.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倅`)
  ).toBeInTheDocument();
};
export const testCase770 = Template.bind({});
testCase770.args = {
  tasks: ["倆"]
};
testCase770.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倆`)
  ).toBeInTheDocument();
};
export const testCase771 = Template.bind({});
testCase771.args = {
  tasks: ["倇"]
};
testCase771.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倇`)
  ).toBeInTheDocument();
};
export const testCase772 = Template.bind({});
testCase772.args = {
  tasks: ["倈"]
};
testCase772.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倈`)
  ).toBeInTheDocument();
};
export const testCase773 = Template.bind({});
testCase773.args = {
  tasks: ["倉"]
};
testCase773.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倉`)
  ).toBeInTheDocument();
};
export const testCase774 = Template.bind({});
testCase774.args = {
  tasks: ["倊"]
};
testCase774.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倊`)
  ).toBeInTheDocument();
};
export const testCase775 = Template.bind({});
testCase775.args = {
  tasks: ["個"]
};
testCase775.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 個`)
  ).toBeInTheDocument();
};
export const testCase776 = Template.bind({});
testCase776.args = {
  tasks: ["倌"]
};
testCase776.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倌`)
  ).toBeInTheDocument();
};
export const testCase777 = Template.bind({});
testCase777.args = {
  tasks: ["倍"]
};
testCase777.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倍`)
  ).toBeInTheDocument();
};
export const testCase778 = Template.bind({});
testCase778.args = {
  tasks: ["倎"]
};
testCase778.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倎`)
  ).toBeInTheDocument();
};
export const testCase779 = Template.bind({});
testCase779.args = {
  tasks: ["倏"]
};
testCase779.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倏`)
  ).toBeInTheDocument();
};
export const testCase780 = Template.bind({});
testCase780.args = {
  tasks: ["倐"]
};
testCase780.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倐`)
  ).toBeInTheDocument();
};
export const testCase781 = Template.bind({});
testCase781.args = {
  tasks: ["們"]
};
testCase781.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 們`)
  ).toBeInTheDocument();
};
export const testCase782 = Template.bind({});
testCase782.args = {
  tasks: ["倒"]
};
testCase782.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倒`)
  ).toBeInTheDocument();
};
export const testCase783 = Template.bind({});
testCase783.args = {
  tasks: ["倓"]
};
testCase783.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倓`)
  ).toBeInTheDocument();
};
export const testCase784 = Template.bind({});
testCase784.args = {
  tasks: ["倔"]
};
testCase784.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倔`)
  ).toBeInTheDocument();
};
export const testCase785 = Template.bind({});
testCase785.args = {
  tasks: ["倕"]
};
testCase785.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倕`)
  ).toBeInTheDocument();
};
export const testCase786 = Template.bind({});
testCase786.args = {
  tasks: ["倖"]
};
testCase786.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倖`)
  ).toBeInTheDocument();
};
export const testCase787 = Template.bind({});
testCase787.args = {
  tasks: ["倗"]
};
testCase787.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倗`)
  ).toBeInTheDocument();
};
export const testCase788 = Template.bind({});
testCase788.args = {
  tasks: ["倘"]
};
testCase788.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倘`)
  ).toBeInTheDocument();
};
export const testCase789 = Template.bind({});
testCase789.args = {
  tasks: ["候"]
};
testCase789.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 候`)
  ).toBeInTheDocument();
};
export const testCase790 = Template.bind({});
testCase790.args = {
  tasks: ["倚"]
};
testCase790.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倚`)
  ).toBeInTheDocument();
};
export const testCase791 = Template.bind({});
testCase791.args = {
  tasks: ["倛"]
};
testCase791.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倛`)
  ).toBeInTheDocument();
};
export const testCase792 = Template.bind({});
testCase792.args = {
  tasks: ["倜"]
};
testCase792.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倜`)
  ).toBeInTheDocument();
};
export const testCase793 = Template.bind({});
testCase793.args = {
  tasks: ["倝"]
};
testCase793.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倝`)
  ).toBeInTheDocument();
};
export const testCase794 = Template.bind({});
testCase794.args = {
  tasks: ["倞"]
};
testCase794.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倞`)
  ).toBeInTheDocument();
};
export const testCase795 = Template.bind({});
testCase795.args = {
  tasks: ["借"]
};
testCase795.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 借`)
  ).toBeInTheDocument();
};
export const testCase796 = Template.bind({});
testCase796.args = {
  tasks: ["倠"]
};
testCase796.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倠`)
  ).toBeInTheDocument();
};
export const testCase797 = Template.bind({});
testCase797.args = {
  tasks: ["倡"]
};
testCase797.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倡`)
  ).toBeInTheDocument();
};
export const testCase798 = Template.bind({});
testCase798.args = {
  tasks: ["倢"]
};
testCase798.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倢`)
  ).toBeInTheDocument();
};
export const testCase799 = Template.bind({});
testCase799.args = {
  tasks: ["倣"]
};
testCase799.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倣`)
  ).toBeInTheDocument();
};
export const testCase800 = Template.bind({});
testCase800.args = {
  tasks: ["値"]
};
testCase800.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 値`)
  ).toBeInTheDocument();
};
export const testCase801 = Template.bind({});
testCase801.args = {
  tasks: ["倥"]
};
testCase801.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倥`)
  ).toBeInTheDocument();
};
export const testCase802 = Template.bind({});
testCase802.args = {
  tasks: ["倦"]
};
testCase802.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倦`)
  ).toBeInTheDocument();
};
export const testCase803 = Template.bind({});
testCase803.args = {
  tasks: ["倧"]
};
testCase803.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倧`)
  ).toBeInTheDocument();
};
export const testCase804 = Template.bind({});
testCase804.args = {
  tasks: ["倨"]
};
testCase804.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倨`)
  ).toBeInTheDocument();
};
export const testCase805 = Template.bind({});
testCase805.args = {
  tasks: ["倩"]
};
testCase805.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倩`)
  ).toBeInTheDocument();
};
export const testCase806 = Template.bind({});
testCase806.args = {
  tasks: ["倪"]
};
testCase806.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倪`)
  ).toBeInTheDocument();
};
export const testCase807 = Template.bind({});
testCase807.args = {
  tasks: ["倫"]
};
testCase807.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倫`)
  ).toBeInTheDocument();
};
export const testCase808 = Template.bind({});
testCase808.args = {
  tasks: ["倬"]
};
testCase808.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倬`)
  ).toBeInTheDocument();
};
export const testCase809 = Template.bind({});
testCase809.args = {
  tasks: ["倭"]
};
testCase809.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倭`)
  ).toBeInTheDocument();
};
export const testCase810 = Template.bind({});
testCase810.args = {
  tasks: ["倮"]
};
testCase810.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倮`)
  ).toBeInTheDocument();
};
export const testCase811 = Template.bind({});
testCase811.args = {
  tasks: ["倯"]
};
testCase811.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倯`)
  ).toBeInTheDocument();
};
export const testCase812 = Template.bind({});
testCase812.args = {
  tasks: ["倰"]
};
testCase812.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倰`)
  ).toBeInTheDocument();
};
export const testCase813 = Template.bind({});
testCase813.args = {
  tasks: ["倱"]
};
testCase813.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倱`)
  ).toBeInTheDocument();
};
export const testCase814 = Template.bind({});
testCase814.args = {
  tasks: ["倲"]
};
testCase814.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倲`)
  ).toBeInTheDocument();
};
export const testCase815 = Template.bind({});
testCase815.args = {
  tasks: ["倳"]
};
testCase815.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倳`)
  ).toBeInTheDocument();
};
export const testCase816 = Template.bind({});
testCase816.args = {
  tasks: ["倴"]
};
testCase816.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倴`)
  ).toBeInTheDocument();
};
export const testCase817 = Template.bind({});
testCase817.args = {
  tasks: ["倵"]
};
testCase817.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倵`)
  ).toBeInTheDocument();
};
export const testCase818 = Template.bind({});
testCase818.args = {
  tasks: ["倶"]
};
testCase818.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倶`)
  ).toBeInTheDocument();
};
export const testCase819 = Template.bind({});
testCase819.args = {
  tasks: ["倷"]
};
testCase819.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倷`)
  ).toBeInTheDocument();
};
export const testCase820 = Template.bind({});
testCase820.args = {
  tasks: ["倸"]
};
testCase820.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倸`)
  ).toBeInTheDocument();
};
export const testCase821 = Template.bind({});
testCase821.args = {
  tasks: ["倹"]
};
testCase821.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倹`)
  ).toBeInTheDocument();
};
export const testCase822 = Template.bind({});
testCase822.args = {
  tasks: ["债"]
};
testCase822.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 债`)
  ).toBeInTheDocument();
};
export const testCase823 = Template.bind({});
testCase823.args = {
  tasks: ["倻"]
};
testCase823.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倻`)
  ).toBeInTheDocument();
};
export const testCase824 = Template.bind({});
testCase824.args = {
  tasks: ["值"]
};
testCase824.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 值`)
  ).toBeInTheDocument();
};
export const testCase825 = Template.bind({});
testCase825.args = {
  tasks: ["倽"]
};
testCase825.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倽`)
  ).toBeInTheDocument();
};
export const testCase826 = Template.bind({});
testCase826.args = {
  tasks: ["倾"]
};
testCase826.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倾`)
  ).toBeInTheDocument();
};
export const testCase827 = Template.bind({});
testCase827.args = {
  tasks: ["倿"]
};
testCase827.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 倿`)
  ).toBeInTheDocument();
};
export const testCase828 = Template.bind({});
testCase828.args = {
  tasks: ["偀"]
};
testCase828.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偀`)
  ).toBeInTheDocument();
};
export const testCase829 = Template.bind({});
testCase829.args = {
  tasks: ["偁"]
};
testCase829.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偁`)
  ).toBeInTheDocument();
};
export const testCase830 = Template.bind({});
testCase830.args = {
  tasks: ["偂"]
};
testCase830.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偂`)
  ).toBeInTheDocument();
};
export const testCase831 = Template.bind({});
testCase831.args = {
  tasks: ["偃"]
};
testCase831.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偃`)
  ).toBeInTheDocument();
};
export const testCase832 = Template.bind({});
testCase832.args = {
  tasks: ["偄"]
};
testCase832.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偄`)
  ).toBeInTheDocument();
};
export const testCase833 = Template.bind({});
testCase833.args = {
  tasks: ["偅"]
};
testCase833.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偅`)
  ).toBeInTheDocument();
};
export const testCase834 = Template.bind({});
testCase834.args = {
  tasks: ["偆"]
};
testCase834.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偆`)
  ).toBeInTheDocument();
};
export const testCase835 = Template.bind({});
testCase835.args = {
  tasks: ["假"]
};
testCase835.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 假`)
  ).toBeInTheDocument();
};
export const testCase836 = Template.bind({});
testCase836.args = {
  tasks: ["偈"]
};
testCase836.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偈`)
  ).toBeInTheDocument();
};
export const testCase837 = Template.bind({});
testCase837.args = {
  tasks: ["偉"]
};
testCase837.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偉`)
  ).toBeInTheDocument();
};
export const testCase838 = Template.bind({});
testCase838.args = {
  tasks: ["偊"]
};
testCase838.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偊`)
  ).toBeInTheDocument();
};
export const testCase839 = Template.bind({});
testCase839.args = {
  tasks: ["偋"]
};
testCase839.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偋`)
  ).toBeInTheDocument();
};
export const testCase840 = Template.bind({});
testCase840.args = {
  tasks: ["偌"]
};
testCase840.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偌`)
  ).toBeInTheDocument();
};
export const testCase841 = Template.bind({});
testCase841.args = {
  tasks: ["偍"]
};
testCase841.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偍`)
  ).toBeInTheDocument();
};
export const testCase842 = Template.bind({});
testCase842.args = {
  tasks: ["偎"]
};
testCase842.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偎`)
  ).toBeInTheDocument();
};
export const testCase843 = Template.bind({});
testCase843.args = {
  tasks: ["偏"]
};
testCase843.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偏`)
  ).toBeInTheDocument();
};
export const testCase844 = Template.bind({});
testCase844.args = {
  tasks: ["偐"]
};
testCase844.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偐`)
  ).toBeInTheDocument();
};
export const testCase845 = Template.bind({});
testCase845.args = {
  tasks: ["偑"]
};
testCase845.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偑`)
  ).toBeInTheDocument();
};
export const testCase846 = Template.bind({});
testCase846.args = {
  tasks: ["偒"]
};
testCase846.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偒`)
  ).toBeInTheDocument();
};
export const testCase847 = Template.bind({});
testCase847.args = {
  tasks: ["偓"]
};
testCase847.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偓`)
  ).toBeInTheDocument();
};
export const testCase848 = Template.bind({});
testCase848.args = {
  tasks: ["偔"]
};
testCase848.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偔`)
  ).toBeInTheDocument();
};
export const testCase849 = Template.bind({});
testCase849.args = {
  tasks: ["偕"]
};
testCase849.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偕`)
  ).toBeInTheDocument();
};
export const testCase850 = Template.bind({});
testCase850.args = {
  tasks: ["偖"]
};
testCase850.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偖`)
  ).toBeInTheDocument();
};
export const testCase851 = Template.bind({});
testCase851.args = {
  tasks: ["偗"]
};
testCase851.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偗`)
  ).toBeInTheDocument();
};
export const testCase852 = Template.bind({});
testCase852.args = {
  tasks: ["偘"]
};
testCase852.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偘`)
  ).toBeInTheDocument();
};
export const testCase853 = Template.bind({});
testCase853.args = {
  tasks: ["偙"]
};
testCase853.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偙`)
  ).toBeInTheDocument();
};
export const testCase854 = Template.bind({});
testCase854.args = {
  tasks: ["做"]
};
testCase854.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 做`)
  ).toBeInTheDocument();
};
export const testCase855 = Template.bind({});
testCase855.args = {
  tasks: ["偛"]
};
testCase855.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偛`)
  ).toBeInTheDocument();
};
export const testCase856 = Template.bind({});
testCase856.args = {
  tasks: ["停"]
};
testCase856.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 停`)
  ).toBeInTheDocument();
};
export const testCase857 = Template.bind({});
testCase857.args = {
  tasks: ["偝"]
};
testCase857.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偝`)
  ).toBeInTheDocument();
};
export const testCase858 = Template.bind({});
testCase858.args = {
  tasks: ["偞"]
};
testCase858.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偞`)
  ).toBeInTheDocument();
};
export const testCase859 = Template.bind({});
testCase859.args = {
  tasks: ["偟"]
};
testCase859.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偟`)
  ).toBeInTheDocument();
};
export const testCase860 = Template.bind({});
testCase860.args = {
  tasks: ["偠"]
};
testCase860.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偠`)
  ).toBeInTheDocument();
};
export const testCase861 = Template.bind({});
testCase861.args = {
  tasks: ["偡"]
};
testCase861.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偡`)
  ).toBeInTheDocument();
};
export const testCase862 = Template.bind({});
testCase862.args = {
  tasks: ["偢"]
};
testCase862.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偢`)
  ).toBeInTheDocument();
};
export const testCase863 = Template.bind({});
testCase863.args = {
  tasks: ["偣"]
};
testCase863.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偣`)
  ).toBeInTheDocument();
};
export const testCase864 = Template.bind({});
testCase864.args = {
  tasks: ["偤"]
};
testCase864.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偤`)
  ).toBeInTheDocument();
};
export const testCase865 = Template.bind({});
testCase865.args = {
  tasks: ["健"]
};
testCase865.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 健`)
  ).toBeInTheDocument();
};
export const testCase866 = Template.bind({});
testCase866.args = {
  tasks: ["偦"]
};
testCase866.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偦`)
  ).toBeInTheDocument();
};
export const testCase867 = Template.bind({});
testCase867.args = {
  tasks: ["偧"]
};
testCase867.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偧`)
  ).toBeInTheDocument();
};
export const testCase868 = Template.bind({});
testCase868.args = {
  tasks: ["偨"]
};
testCase868.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偨`)
  ).toBeInTheDocument();
};
export const testCase869 = Template.bind({});
testCase869.args = {
  tasks: ["偩"]
};
testCase869.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偩`)
  ).toBeInTheDocument();
};
export const testCase870 = Template.bind({});
testCase870.args = {
  tasks: ["偪"]
};
testCase870.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偪`)
  ).toBeInTheDocument();
};
export const testCase871 = Template.bind({});
testCase871.args = {
  tasks: ["偫"]
};
testCase871.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偫`)
  ).toBeInTheDocument();
};
export const testCase872 = Template.bind({});
testCase872.args = {
  tasks: ["偬"]
};
testCase872.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偬`)
  ).toBeInTheDocument();
};
export const testCase873 = Template.bind({});
testCase873.args = {
  tasks: ["偭"]
};
testCase873.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偭`)
  ).toBeInTheDocument();
};
export const testCase874 = Template.bind({});
testCase874.args = {
  tasks: ["偮"]
};
testCase874.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偮`)
  ).toBeInTheDocument();
};
export const testCase875 = Template.bind({});
testCase875.args = {
  tasks: ["偯"]
};
testCase875.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偯`)
  ).toBeInTheDocument();
};
export const testCase876 = Template.bind({});
testCase876.args = {
  tasks: ["偰"]
};
testCase876.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偰`)
  ).toBeInTheDocument();
};
export const testCase877 = Template.bind({});
testCase877.args = {
  tasks: ["偱"]
};
testCase877.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偱`)
  ).toBeInTheDocument();
};
export const testCase878 = Template.bind({});
testCase878.args = {
  tasks: ["偲"]
};
testCase878.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偲`)
  ).toBeInTheDocument();
};
export const testCase879 = Template.bind({});
testCase879.args = {
  tasks: ["偳"]
};
testCase879.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偳`)
  ).toBeInTheDocument();
};
export const testCase880 = Template.bind({});
testCase880.args = {
  tasks: ["側"]
};
testCase880.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 側`)
  ).toBeInTheDocument();
};
export const testCase881 = Template.bind({});
testCase881.args = {
  tasks: ["偵"]
};
testCase881.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偵`)
  ).toBeInTheDocument();
};
export const testCase882 = Template.bind({});
testCase882.args = {
  tasks: ["偶"]
};
testCase882.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偶`)
  ).toBeInTheDocument();
};
export const testCase883 = Template.bind({});
testCase883.args = {
  tasks: ["偷"]
};
testCase883.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偷`)
  ).toBeInTheDocument();
};
export const testCase884 = Template.bind({});
testCase884.args = {
  tasks: ["偸"]
};
testCase884.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偸`)
  ).toBeInTheDocument();
};
export const testCase885 = Template.bind({});
testCase885.args = {
  tasks: ["偹"]
};
testCase885.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偹`)
  ).toBeInTheDocument();
};
export const testCase886 = Template.bind({});
testCase886.args = {
  tasks: ["偺"]
};
testCase886.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偺`)
  ).toBeInTheDocument();
};
export const testCase887 = Template.bind({});
testCase887.args = {
  tasks: ["偻"]
};
testCase887.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偻`)
  ).toBeInTheDocument();
};
export const testCase888 = Template.bind({});
testCase888.args = {
  tasks: ["偼"]
};
testCase888.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偼`)
  ).toBeInTheDocument();
};
export const testCase889 = Template.bind({});
testCase889.args = {
  tasks: ["偽"]
};
testCase889.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偽`)
  ).toBeInTheDocument();
};
export const testCase890 = Template.bind({});
testCase890.args = {
  tasks: ["偾"]
};
testCase890.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偾`)
  ).toBeInTheDocument();
};
export const testCase891 = Template.bind({});
testCase891.args = {
  tasks: ["偿"]
};
testCase891.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 偿`)
  ).toBeInTheDocument();
};
export const testCase892 = Template.bind({});
testCase892.args = {
  tasks: ["傀"]
};
testCase892.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傀`)
  ).toBeInTheDocument();
};
export const testCase893 = Template.bind({});
testCase893.args = {
  tasks: ["傁"]
};
testCase893.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傁`)
  ).toBeInTheDocument();
};
export const testCase894 = Template.bind({});
testCase894.args = {
  tasks: ["傂"]
};
testCase894.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傂`)
  ).toBeInTheDocument();
};
export const testCase895 = Template.bind({});
testCase895.args = {
  tasks: ["傃"]
};
testCase895.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傃`)
  ).toBeInTheDocument();
};
export const testCase896 = Template.bind({});
testCase896.args = {
  tasks: ["傄"]
};
testCase896.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傄`)
  ).toBeInTheDocument();
};
export const testCase897 = Template.bind({});
testCase897.args = {
  tasks: ["傅"]
};
testCase897.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傅`)
  ).toBeInTheDocument();
};
export const testCase898 = Template.bind({});
testCase898.args = {
  tasks: ["傆"]
};
testCase898.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傆`)
  ).toBeInTheDocument();
};
export const testCase899 = Template.bind({});
testCase899.args = {
  tasks: ["傇"]
};
testCase899.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傇`)
  ).toBeInTheDocument();
};
export const testCase900 = Template.bind({});
testCase900.args = {
  tasks: ["傈"]
};
testCase900.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傈`)
  ).toBeInTheDocument();
};
export const testCase901 = Template.bind({});
testCase901.args = {
  tasks: ["傉"]
};
testCase901.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傉`)
  ).toBeInTheDocument();
};
export const testCase902 = Template.bind({});
testCase902.args = {
  tasks: ["傊"]
};
testCase902.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傊`)
  ).toBeInTheDocument();
};
export const testCase903 = Template.bind({});
testCase903.args = {
  tasks: ["傋"]
};
testCase903.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傋`)
  ).toBeInTheDocument();
};
export const testCase904 = Template.bind({});
testCase904.args = {
  tasks: ["傌"]
};
testCase904.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傌`)
  ).toBeInTheDocument();
};
export const testCase905 = Template.bind({});
testCase905.args = {
  tasks: ["傍"]
};
testCase905.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傍`)
  ).toBeInTheDocument();
};
export const testCase906 = Template.bind({});
testCase906.args = {
  tasks: ["傎"]
};
testCase906.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傎`)
  ).toBeInTheDocument();
};
export const testCase907 = Template.bind({});
testCase907.args = {
  tasks: ["傏"]
};
testCase907.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傏`)
  ).toBeInTheDocument();
};
export const testCase908 = Template.bind({});
testCase908.args = {
  tasks: ["傐"]
};
testCase908.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傐`)
  ).toBeInTheDocument();
};
export const testCase909 = Template.bind({});
testCase909.args = {
  tasks: ["傑"]
};
testCase909.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傑`)
  ).toBeInTheDocument();
};
export const testCase910 = Template.bind({});
testCase910.args = {
  tasks: ["傒"]
};
testCase910.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傒`)
  ).toBeInTheDocument();
};
export const testCase911 = Template.bind({});
testCase911.args = {
  tasks: ["傓"]
};
testCase911.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傓`)
  ).toBeInTheDocument();
};
export const testCase912 = Template.bind({});
testCase912.args = {
  tasks: ["傔"]
};
testCase912.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傔`)
  ).toBeInTheDocument();
};
export const testCase913 = Template.bind({});
testCase913.args = {
  tasks: ["傕"]
};
testCase913.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傕`)
  ).toBeInTheDocument();
};
export const testCase914 = Template.bind({});
testCase914.args = {
  tasks: ["傖"]
};
testCase914.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傖`)
  ).toBeInTheDocument();
};
export const testCase915 = Template.bind({});
testCase915.args = {
  tasks: ["傗"]
};
testCase915.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傗`)
  ).toBeInTheDocument();
};
export const testCase916 = Template.bind({});
testCase916.args = {
  tasks: ["傘"]
};
testCase916.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傘`)
  ).toBeInTheDocument();
};
export const testCase917 = Template.bind({});
testCase917.args = {
  tasks: ["備"]
};
testCase917.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 備`)
  ).toBeInTheDocument();
};
export const testCase918 = Template.bind({});
testCase918.args = {
  tasks: ["傚"]
};
testCase918.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傚`)
  ).toBeInTheDocument();
};
export const testCase919 = Template.bind({});
testCase919.args = {
  tasks: ["傛"]
};
testCase919.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傛`)
  ).toBeInTheDocument();
};
export const testCase920 = Template.bind({});
testCase920.args = {
  tasks: ["傜"]
};
testCase920.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傜`)
  ).toBeInTheDocument();
};
export const testCase921 = Template.bind({});
testCase921.args = {
  tasks: ["傝"]
};
testCase921.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傝`)
  ).toBeInTheDocument();
};
export const testCase922 = Template.bind({});
testCase922.args = {
  tasks: ["傞"]
};
testCase922.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傞`)
  ).toBeInTheDocument();
};
export const testCase923 = Template.bind({});
testCase923.args = {
  tasks: ["傟"]
};
testCase923.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傟`)
  ).toBeInTheDocument();
};
export const testCase924 = Template.bind({});
testCase924.args = {
  tasks: ["傠"]
};
testCase924.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傠`)
  ).toBeInTheDocument();
};
export const testCase925 = Template.bind({});
testCase925.args = {
  tasks: ["傡"]
};
testCase925.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傡`)
  ).toBeInTheDocument();
};
export const testCase926 = Template.bind({});
testCase926.args = {
  tasks: ["傢"]
};
testCase926.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傢`)
  ).toBeInTheDocument();
};
export const testCase927 = Template.bind({});
testCase927.args = {
  tasks: ["傣"]
};
testCase927.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傣`)
  ).toBeInTheDocument();
};
export const testCase928 = Template.bind({});
testCase928.args = {
  tasks: ["傤"]
};
testCase928.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傤`)
  ).toBeInTheDocument();
};
export const testCase929 = Template.bind({});
testCase929.args = {
  tasks: ["傥"]
};
testCase929.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傥`)
  ).toBeInTheDocument();
};
export const testCase930 = Template.bind({});
testCase930.args = {
  tasks: ["傦"]
};
testCase930.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傦`)
  ).toBeInTheDocument();
};
export const testCase931 = Template.bind({});
testCase931.args = {
  tasks: ["傧"]
};
testCase931.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傧`)
  ).toBeInTheDocument();
};
export const testCase932 = Template.bind({});
testCase932.args = {
  tasks: ["储"]
};
testCase932.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 储`)
  ).toBeInTheDocument();
};
export const testCase933 = Template.bind({});
testCase933.args = {
  tasks: ["傩"]
};
testCase933.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傩`)
  ).toBeInTheDocument();
};
export const testCase934 = Template.bind({});
testCase934.args = {
  tasks: ["傪"]
};
testCase934.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傪`)
  ).toBeInTheDocument();
};
export const testCase935 = Template.bind({});
testCase935.args = {
  tasks: ["傫"]
};
testCase935.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傫`)
  ).toBeInTheDocument();
};
export const testCase936 = Template.bind({});
testCase936.args = {
  tasks: ["催"]
};
testCase936.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 催`)
  ).toBeInTheDocument();
};
export const testCase937 = Template.bind({});
testCase937.args = {
  tasks: ["傭"]
};
testCase937.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傭`)
  ).toBeInTheDocument();
};
export const testCase938 = Template.bind({});
testCase938.args = {
  tasks: ["傮"]
};
testCase938.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傮`)
  ).toBeInTheDocument();
};
export const testCase939 = Template.bind({});
testCase939.args = {
  tasks: ["傯"]
};
testCase939.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傯`)
  ).toBeInTheDocument();
};
export const testCase940 = Template.bind({});
testCase940.args = {
  tasks: ["傰"]
};
testCase940.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傰`)
  ).toBeInTheDocument();
};
export const testCase941 = Template.bind({});
testCase941.args = {
  tasks: ["傱"]
};
testCase941.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傱`)
  ).toBeInTheDocument();
};
export const testCase942 = Template.bind({});
testCase942.args = {
  tasks: ["傲"]
};
testCase942.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傲`)
  ).toBeInTheDocument();
};
export const testCase943 = Template.bind({});
testCase943.args = {
  tasks: ["傳"]
};
testCase943.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傳`)
  ).toBeInTheDocument();
};
export const testCase944 = Template.bind({});
testCase944.args = {
  tasks: ["傴"]
};
testCase944.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傴`)
  ).toBeInTheDocument();
};
export const testCase945 = Template.bind({});
testCase945.args = {
  tasks: ["債"]
};
testCase945.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 債`)
  ).toBeInTheDocument();
};
export const testCase946 = Template.bind({});
testCase946.args = {
  tasks: ["傶"]
};
testCase946.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傶`)
  ).toBeInTheDocument();
};
export const testCase947 = Template.bind({});
testCase947.args = {
  tasks: ["傷"]
};
testCase947.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傷`)
  ).toBeInTheDocument();
};
export const testCase948 = Template.bind({});
testCase948.args = {
  tasks: ["傸"]
};
testCase948.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傸`)
  ).toBeInTheDocument();
};
export const testCase949 = Template.bind({});
testCase949.args = {
  tasks: ["傹"]
};
testCase949.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傹`)
  ).toBeInTheDocument();
};
export const testCase950 = Template.bind({});
testCase950.args = {
  tasks: ["傺"]
};
testCase950.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傺`)
  ).toBeInTheDocument();
};
export const testCase951 = Template.bind({});
testCase951.args = {
  tasks: ["傻"]
};
testCase951.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傻`)
  ).toBeInTheDocument();
};
export const testCase952 = Template.bind({});
testCase952.args = {
  tasks: ["傼"]
};
testCase952.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傼`)
  ).toBeInTheDocument();
};
export const testCase953 = Template.bind({});
testCase953.args = {
  tasks: ["傽"]
};
testCase953.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傽`)
  ).toBeInTheDocument();
};
export const testCase954 = Template.bind({});
testCase954.args = {
  tasks: ["傾"]
};
testCase954.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傾`)
  ).toBeInTheDocument();
};
export const testCase955 = Template.bind({});
testCase955.args = {
  tasks: ["傿"]
};
testCase955.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 傿`)
  ).toBeInTheDocument();
};
export const testCase956 = Template.bind({});
testCase956.args = {
  tasks: ["僀"]
};
testCase956.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僀`)
  ).toBeInTheDocument();
};
export const testCase957 = Template.bind({});
testCase957.args = {
  tasks: ["僁"]
};
testCase957.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僁`)
  ).toBeInTheDocument();
};
export const testCase958 = Template.bind({});
testCase958.args = {
  tasks: ["僂"]
};
testCase958.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僂`)
  ).toBeInTheDocument();
};
export const testCase959 = Template.bind({});
testCase959.args = {
  tasks: ["僃"]
};
testCase959.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僃`)
  ).toBeInTheDocument();
};
export const testCase960 = Template.bind({});
testCase960.args = {
  tasks: ["僄"]
};
testCase960.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僄`)
  ).toBeInTheDocument();
};
export const testCase961 = Template.bind({});
testCase961.args = {
  tasks: ["僅"]
};
testCase961.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僅`)
  ).toBeInTheDocument();
};
export const testCase962 = Template.bind({});
testCase962.args = {
  tasks: ["僆"]
};
testCase962.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僆`)
  ).toBeInTheDocument();
};
export const testCase963 = Template.bind({});
testCase963.args = {
  tasks: ["僇"]
};
testCase963.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僇`)
  ).toBeInTheDocument();
};
export const testCase964 = Template.bind({});
testCase964.args = {
  tasks: ["僈"]
};
testCase964.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僈`)
  ).toBeInTheDocument();
};
export const testCase965 = Template.bind({});
testCase965.args = {
  tasks: ["僉"]
};
testCase965.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僉`)
  ).toBeInTheDocument();
};
export const testCase966 = Template.bind({});
testCase966.args = {
  tasks: ["僊"]
};
testCase966.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僊`)
  ).toBeInTheDocument();
};
export const testCase967 = Template.bind({});
testCase967.args = {
  tasks: ["僋"]
};
testCase967.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僋`)
  ).toBeInTheDocument();
};
export const testCase968 = Template.bind({});
testCase968.args = {
  tasks: ["僌"]
};
testCase968.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僌`)
  ).toBeInTheDocument();
};
export const testCase969 = Template.bind({});
testCase969.args = {
  tasks: ["働"]
};
testCase969.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 働`)
  ).toBeInTheDocument();
};
export const testCase970 = Template.bind({});
testCase970.args = {
  tasks: ["僎"]
};
testCase970.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僎`)
  ).toBeInTheDocument();
};
export const testCase971 = Template.bind({});
testCase971.args = {
  tasks: ["像"]
};
testCase971.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 像`)
  ).toBeInTheDocument();
};
export const testCase972 = Template.bind({});
testCase972.args = {
  tasks: ["僐"]
};
testCase972.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僐`)
  ).toBeInTheDocument();
};
export const testCase973 = Template.bind({});
testCase973.args = {
  tasks: ["僑"]
};
testCase973.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僑`)
  ).toBeInTheDocument();
};
export const testCase974 = Template.bind({});
testCase974.args = {
  tasks: ["僒"]
};
testCase974.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僒`)
  ).toBeInTheDocument();
};
export const testCase975 = Template.bind({});
testCase975.args = {
  tasks: ["僓"]
};
testCase975.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僓`)
  ).toBeInTheDocument();
};
export const testCase976 = Template.bind({});
testCase976.args = {
  tasks: ["僔"]
};
testCase976.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僔`)
  ).toBeInTheDocument();
};
export const testCase977 = Template.bind({});
testCase977.args = {
  tasks: ["僕"]
};
testCase977.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僕`)
  ).toBeInTheDocument();
};
export const testCase978 = Template.bind({});
testCase978.args = {
  tasks: ["僖"]
};
testCase978.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僖`)
  ).toBeInTheDocument();
};
export const testCase979 = Template.bind({});
testCase979.args = {
  tasks: ["僗"]
};
testCase979.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僗`)
  ).toBeInTheDocument();
};
export const testCase980 = Template.bind({});
testCase980.args = {
  tasks: ["僘"]
};
testCase980.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僘`)
  ).toBeInTheDocument();
};
export const testCase981 = Template.bind({});
testCase981.args = {
  tasks: ["僙"]
};
testCase981.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僙`)
  ).toBeInTheDocument();
};
export const testCase982 = Template.bind({});
testCase982.args = {
  tasks: ["僚"]
};
testCase982.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僚`)
  ).toBeInTheDocument();
};
export const testCase983 = Template.bind({});
testCase983.args = {
  tasks: ["僛"]
};
testCase983.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僛`)
  ).toBeInTheDocument();
};
export const testCase984 = Template.bind({});
testCase984.args = {
  tasks: ["僜"]
};
testCase984.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僜`)
  ).toBeInTheDocument();
};
export const testCase985 = Template.bind({});
testCase985.args = {
  tasks: ["僝"]
};
testCase985.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僝`)
  ).toBeInTheDocument();
};
export const testCase986 = Template.bind({});
testCase986.args = {
  tasks: ["僞"]
};
testCase986.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僞`)
  ).toBeInTheDocument();
};
export const testCase987 = Template.bind({});
testCase987.args = {
  tasks: ["僟"]
};
testCase987.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僟`)
  ).toBeInTheDocument();
};
export const testCase988 = Template.bind({});
testCase988.args = {
  tasks: ["僠"]
};
testCase988.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僠`)
  ).toBeInTheDocument();
};
export const testCase989 = Template.bind({});
testCase989.args = {
  tasks: ["僡"]
};
testCase989.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僡`)
  ).toBeInTheDocument();
};
export const testCase990 = Template.bind({});
testCase990.args = {
  tasks: ["僢"]
};
testCase990.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僢`)
  ).toBeInTheDocument();
};
export const testCase991 = Template.bind({});
testCase991.args = {
  tasks: ["僣"]
};
testCase991.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僣`)
  ).toBeInTheDocument();
};
export const testCase992 = Template.bind({});
testCase992.args = {
  tasks: ["僤"]
};
testCase992.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僤`)
  ).toBeInTheDocument();
};
export const testCase993 = Template.bind({});
testCase993.args = {
  tasks: ["僥"]
};
testCase993.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僥`)
  ).toBeInTheDocument();
};
export const testCase994 = Template.bind({});
testCase994.args = {
  tasks: ["僦"]
};
testCase994.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僦`)
  ).toBeInTheDocument();
};
export const testCase995 = Template.bind({});
testCase995.args = {
  tasks: ["僧"]
};
testCase995.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僧`)
  ).toBeInTheDocument();
};
export const testCase996 = Template.bind({});
testCase996.args = {
  tasks: ["僨"]
};
testCase996.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僨`)
  ).toBeInTheDocument();
};
export const testCase997 = Template.bind({});
testCase997.args = {
  tasks: ["僩"]
};
testCase997.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僩`)
  ).toBeInTheDocument();
};
export const testCase998 = Template.bind({});
testCase998.args = {
  tasks: ["僪"]
};
testCase998.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僪`)
  ).toBeInTheDocument();
};
export const testCase999 = Template.bind({});
testCase999.args = {
  tasks: ["僫"]
};
testCase999.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僫`)
  ).toBeInTheDocument();
};
export const testCase1000 = Template.bind({});
testCase1000.args = {
  tasks: ["僬"]
};
testCase1000.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僬`)
  ).toBeInTheDocument();
};
export const testCase1001 = Template.bind({});
testCase1001.args = {
  tasks: ["僭"]
};
testCase1001.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僭`)
  ).toBeInTheDocument();
};
export const testCase1002 = Template.bind({});
testCase1002.args = {
  tasks: ["僮"]
};
testCase1002.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僮`)
  ).toBeInTheDocument();
};
export const testCase1003 = Template.bind({});
testCase1003.args = {
  tasks: ["僯"]
};
testCase1003.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僯`)
  ).toBeInTheDocument();
};
export const testCase1004 = Template.bind({});
testCase1004.args = {
  tasks: ["僰"]
};
testCase1004.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僰`)
  ).toBeInTheDocument();
};
export const testCase1005 = Template.bind({});
testCase1005.args = {
  tasks: ["僱"]
};
testCase1005.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僱`)
  ).toBeInTheDocument();
};
export const testCase1006 = Template.bind({});
testCase1006.args = {
  tasks: ["僲"]
};
testCase1006.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僲`)
  ).toBeInTheDocument();
};
export const testCase1007 = Template.bind({});
testCase1007.args = {
  tasks: ["僳"]
};
testCase1007.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僳`)
  ).toBeInTheDocument();
};
export const testCase1008 = Template.bind({});
testCase1008.args = {
  tasks: ["僴"]
};
testCase1008.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僴`)
  ).toBeInTheDocument();
};
export const testCase1009 = Template.bind({});
testCase1009.args = {
  tasks: ["僵"]
};
testCase1009.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僵`)
  ).toBeInTheDocument();
};
export const testCase1010 = Template.bind({});
testCase1010.args = {
  tasks: ["僶"]
};
testCase1010.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僶`)
  ).toBeInTheDocument();
};
export const testCase1011 = Template.bind({});
testCase1011.args = {
  tasks: ["僷"]
};
testCase1011.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僷`)
  ).toBeInTheDocument();
};
export const testCase1012 = Template.bind({});
testCase1012.args = {
  tasks: ["僸"]
};
testCase1012.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僸`)
  ).toBeInTheDocument();
};
export const testCase1013 = Template.bind({});
testCase1013.args = {
  tasks: ["價"]
};
testCase1013.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 價`)
  ).toBeInTheDocument();
};
export const testCase1014 = Template.bind({});
testCase1014.args = {
  tasks: ["僺"]
};
testCase1014.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僺`)
  ).toBeInTheDocument();
};
export const testCase1015 = Template.bind({});
testCase1015.args = {
  tasks: ["僻"]
};
testCase1015.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僻`)
  ).toBeInTheDocument();
};
export const testCase1016 = Template.bind({});
testCase1016.args = {
  tasks: ["僼"]
};
testCase1016.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僼`)
  ).toBeInTheDocument();
};
export const testCase1017 = Template.bind({});
testCase1017.args = {
  tasks: ["僽"]
};
testCase1017.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僽`)
  ).toBeInTheDocument();
};
export const testCase1018 = Template.bind({});
testCase1018.args = {
  tasks: ["僾"]
};
testCase1018.play = async ({ canvasElement }) => {
  await expect(
    within(canvasElement).getByText(`0 僾`)
  ).toBeInTheDocument();
};
