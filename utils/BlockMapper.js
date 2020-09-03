import React from "react";

import ComponentName from "../file-path-to-component";

const blockMapping = {
  AcfComponentNameBlock: ComponentName,
};

function mapBlocksToComponents(post) {
  // Loop over all of our blocks.
  return post.blocks.map((block, index) => {
    // If this block is null, bail early.
    if (!block) {
      return null;
    }

    // Get the name of the block.
    // eslint-disable-next-line no-underscore-dangle
    const blockName = block.__typename;

    // Check if we have mapped the block.
    // If not, return empty (null)
    if (!(blockName in blockMapping)) {
      console.debug(`No mapping for ${blockName}`);
      return null;
    }

    // Get the instance into a variable
    // The upper case letter in this var is very important
    // as it allows us to reuse it as a component name below!
    const BlockInstance = blockMapping[blockName];

    // Return the instance.
    return (
      <BlockInstance
        // eslint-disable-next-line react/no-array-index-key
        key={`${post.id}-${blockName}-${index}`}
        id={"attributes" in block ? block.attributes.id : null}
        {...block}
        post={post}
      />
    );
  });
}

export default mapBlocksToComponents;
