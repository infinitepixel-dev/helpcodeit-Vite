import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

const LayoutTechnique = ({ title, description, children }) => (
  <div className="p-4 mb-8 bg-gray-100 rounded-lg">
    <h2 className="mb-2 text-4xl font-bold text-blue-600">{title}</h2>
    <p className="mb-4 text-lg text-gray-700">{description}</p>
    <div className="p-4 bg-gray-200 border-2 border-gray-300 rounded shadow">
      {children}
    </div>
  </div>
);

const FlexboxExample = () => {
  const [direction, setDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Flex Direction:</label>
        <select
          className="w-full p-2 text-gray-700 border rounded"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        >
          <option value="row">Row</option>
          <option value="column">Column</option>
          <option value="row-reverse">Row Reverse</option>
          <option value="column-reverse">Column Reverse</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Justify Content:</label>
        <select
          className="w-full p-2 text-gray-700 border rounded"
          value={justifyContent}
          onChange={(e) => setJustifyContent(e.target.value)}
        >
          <option value="flex-start">Flex Start</option>
          <option value="flex-end">Flex End</option>
          <option value="center">Center</option>
          <option value="space-between">Space Between</option>
          <option value="space-around">Space Around</option>
          <option value="space-evenly">Space Evenly</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Align Items:</label>
        <select
          className="w-full p-2 text-gray-700 border rounded"
          value={alignItems}
          onChange={(e) => setAlignItems(e.target.value)}
        >
          <option value="stretch">Stretch</option>
          <option value="flex-start">Flex Start</option>
          <option value="flex-end">Flex End</option>
          <option value="center">Center</option>
          <option value="baseline">Baseline</option>
        </select>
      </div>
      <div
        className="flex bg-gray-200 h-60"
        style={{
          flexDirection: direction,
          justifyContent: justifyContent,
          alignItems: alignItems
        }}
      >
        <div className="p-4 m-2 text-white bg-blue-500">Item 1</div>
        <div className="p-4 m-2 text-white bg-green-500">Item 2</div>
        <div className="p-4 m-2 text-white bg-red-500">Item 3</div>
      </div>
    </div>
  );
};

const GridExample = () => {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(4);

  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  const gapClasses = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    7: 'gap-7',
    8: 'gap-8',
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Number of Columns: {columns}</label>
        <Slider
          defaultValue={[3]}
          max={6}
          min={1}
          step={1}
          onValueChange={(value) => setColumns(value[0])}
          className="border-2 border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Gap Size: {gap}</label>
        <Slider
          defaultValue={[4]}
          max={8}
          min={0}
          step={1}
          onValueChange={(value) => setGap(value[0])}
          className="border-2 border-gray-300"
        />
      </div>
      <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]}`}>
        <div className="p-4 text-white bg-yellow-500">Grid 1</div>
        <div className="p-4 text-white bg-pink-500">Grid 2</div>
        <div className="p-4 text-white bg-purple-500">Grid 3</div>
        <div className="p-4 text-white bg-indigo-500">Grid 4</div>
        <div className="p-4 text-white bg-blue-500">Grid 5</div>
        <div className="p-4 text-white bg-green-500">Grid 6</div>
      </div>
    </div>
  );
};

const FloatExample = () => (
  <div>
    <div className="clearfix">
      <div className="float-left p-4 mb-2 mr-4 bg-orange-500">
        Floated Left
      </div>
      <p className="mb-10 text-gray-700">
        This text wraps around the floated element. Floats are often used for
        images within text or for creating multi-column layouts, although Flexbox
        and Grid are now preferred for complex layouts. Float is still useful for
        wrapping text around images or other elements.
      </p>
    </div>
    <hr className="my-4 border-t-2 border-gray-300" />
    <div className="clearfix">
      <div className="float-right p-4 mb-2 ml-4 bg-teal-500">
        Floated Right
      </div>
      <p className="mb-10 text-gray-700">
        This text wraps around the floated element. Floats are often used for
        images within text or for creating multi-column layouts, although Flexbox
        and Grid are now preferred for complex layouts. Float is still useful for
        wrapping text around images or other elements.
      </p>
      </div>
      <hr className="my-4 border-t-2 border-gray-300" />
      <div className="clearfix">
      <div className="float-none p-4 mb-2 bg-red-500">
        No Float
        </div>
        <p className="mb-10 text-gray-700">
        This text does not wrap around the floated element. Floats are often used for
        images within text or for creating multi-column layouts, although Flexbox
        and Grid are now preferred for complex layouts. Float is still useful for
        wrapping text around images or other elements.
      </p>
      </div>
  </div>

);

const PositioningExample = () => (
  <div className="relative h-40 bg-gray-200">
    <div className="absolute top-0 left-0 p-2 text-white bg-red-500">Top Left</div>
    <div className="absolute top-0 right-0 p-2 text-white bg-blue-500">Top Right</div>
    <div className="absolute bottom-0 left-0 p-2 text-white bg-green-500">Bottom Left</div>
    <div className="absolute bottom-0 right-0 p-2 text-white bg-yellow-500">Bottom Right</div>
    <div className="absolute p-2 text-white transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 top-1/2 left-1/2">Center</div>
  </div>
);

const DisplayExample = () => (
  <div>
    <div className="mb-2 text-gray-700"><span className="inline p-2 mr-2 text-white bg-blue-500">Inline</span> Text after inline element</div>
    <div className="mb-2 text-gray-700"><div className="inline-block p-2 mr-2 text-white bg-green-500">Inline-block</div> Text after inline-block element</div>
    <div className="mb-2 text-gray-700"><div className="block p-2 text-white bg-red-500">Block</div> Text after block element</div>
  </div>
);

const CSSLayoutTechniques = () => {
  return (
    <div className="container p-6 mx-auto h-fit">
      <h1 className="mb-6 text-4xl font-bold text-center mukataFont dark:text-white">Comprehensive CSS Layout Techniques</h1>
      <p className="mb-6 text-lg text-center text-gray-700 dark:text-gray-300">
        This guide will help you with each of the major CSS layout techniques, including Flexbox, Grid, Float, Positioning, and Display properties.
      </p>

      <Tabs defaultValue="flexbox">
        <TabsList className="grid w-full grid-cols-5 bg-white">
          <TabsTrigger
            className="text-white bg-red-500 custom-tab-flexbox"
            value="flexbox">Flexbox</TabsTrigger>
          <TabsTrigger
            className="text-white bg-green-500 custom-tab-grid"
            value="grid">Grid</TabsTrigger>
          <TabsTrigger
            className="text-white bg-blue-500 custom-tab-float"
            value="float">Float</TabsTrigger>
          <TabsTrigger
            className="text-white bg-yellow-500 custom-tab-positioning"
            value="positioning">Positioning</TabsTrigger>
          <TabsTrigger
            className="text-white bg-purple-500 custom-tab-display"
            value="display">Display</TabsTrigger>
        </TabsList>
        <TabsContent value="flexbox">
          <LayoutTechnique
            title="Flexbox"
            description="Flexbox is a one-dimensional layout method for arranging items in rows or columns. It's ideal for distributing space and aligning content in complex ways. To implement it you need to use the CSS property display: flex. Then you will be able to use properties like justify-content, align-items, and flex-direction to control the layout."
          >
            <FlexboxExample />
          </LayoutTechnique>
        </TabsContent>
        <TabsContent value="grid">
          <LayoutTechnique
            title="Grid"
            description="CSS Grid is a two-dimensional layout system for arranging content in rows and columns. It's perfect for creating complex layouts and alignment scenarios. To implement it you need to use the CSS property display: grid. Then you will be able to use properties like grid-template-columns, grid-template-rows, and grid-gap to control the layout."
          >
            <GridExample />
          </LayoutTechnique>
        </TabsContent>
        <TabsContent value="float">
          <LayoutTechnique
            title="Float"
            description="Floating elements allows text and inline elements to wrap around it. While less common in modern layouts, it's still useful for specific scenarios. While it has gone out of favor for layout purposes, it's still useful for wrapping text around images or other elements when no other option works."
          >
            <FloatExample />
          </LayoutTechnique>
        </TabsContent>
        <TabsContent value="positioning">
          <LayoutTechnique
            title="Positioning"
            description="CSS positioning allows you to precisely control the placement of elements. It's useful for creating overlays, sticky elements, and precise layouts. To implement it you need to use the CSS properties position, top, right, bottom, and left. Then you will be able to control the position of the element."
          >
            <PositioningExample />
          </LayoutTechnique>
        </TabsContent>
        <TabsContent value="display">
          <LayoutTechnique
            title="Display Properties"
            description="The display property defines how an element should be displayed. It affects the layout flow and how elements interact with each other. The most common values are block, inline, and inline-block. Block elements take up the full width available, inline elements take up only as much width as necessary, and inline-block elements are like inline elements but can have padding and margins."
          >
            <DisplayExample />
          </LayoutTechnique>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CSSLayoutTechniques;