import * as Inputs from '../inputs/inputs';

/**
 * Contains various list methods.
 * <div>
 *  <img src="../assets/images/blockly-images/math/math.svg" alt="Blockly Image"/>
 * </div>
 */
export class Lists {

    constructor() { }
    /**
     * Gets an item from the list by using a 0 based index
     * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#getItem
     * @param inputs a list and an index
     * @returns item
     * @group get
     * @shortname item by index
     * @drawable false
     */
    getItem(inputs: Inputs.Lists.ListItemDto): any {
        return structuredClone(inputs.list[inputs.index]);
    }

    /**
       * Gets a sub list between start and end indexes
       * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#getSubList
       * @param inputs a list and start and end indexes
       * @returns sub list
       * @group get
       * @shortname sublist
       * @drawable false
       */
    getSubList(inputs: Inputs.Lists.SubListDto): any {
        return structuredClone(inputs.list.slice(inputs.indexStart, inputs.indexEnd));
    }

    /**
     * Reverse the list
     * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#reverse
     * @param inputs a list and an index
     * @returns item
     * @group edit
     * @shortname reverse
     * @drawable false
     */
    reverse(inputs: Inputs.Lists.ListDto): any {
        const cloned = structuredClone(inputs.list);
        return cloned.reverse();
    }

    /**
     * Flip 2d lists - every nth element of each list will form a separate list
     * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#reverse
     * @param inputs a list of lists to flip
     * @returns item
     * @group edit
     * @shortname reverse
     * @drawable false
     */
    flipLists(inputs: Inputs.Lists.ListDto): any {
        if(inputs.list.length > 0) {
            const lengthOfFirstList = inputs.list[0].length;
            let allListsSameLength = true;
            inputs.list.forEach(l => {
                if(l.length !== lengthOfFirstList){
                    allListsSameLength = false;
                }
            });
            if(allListsSameLength){
                const result = [];
                for(let i = 0; i < lengthOfFirstList; i++){
                    const newList = [];
                    inputs.list.forEach(l => {
                        newList.push(l[i]);
                    });
                    result.push(newList);
                }
                return result;
            } else {
                throw new Error('Lists are not of the same length');
            }
        } else {
            throw new Error('List is empty');
        }
    }

    /**
     * Gets the length of the list
     * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#listLength
     * @param inputs a length list
     * @returns a number
     * @group get
     * @shortname list length
     * @drawable false
     */
    listLength(inputs: Inputs.Lists.ListDto): number {
        return inputs.list.length
    }

    /**
     * Add item to the list
     * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#addItemToListAtIndex
     * @param inputs a list, item and an index
     * @returns list with added item
     * @group add
     * @shortname item at index
     * @drawable false
     */
    addItemToListAtIndex(inputs: Inputs.Lists.AddItemToListAtIndexDto): any {
        const cloned = structuredClone(inputs.list);
        if (inputs.index < 0 || inputs.index > cloned.length) {
            throw new Error('Index out of range');
        } else {
            cloned.splice(inputs.index, 0, inputs.item);
        }
        return cloned;
    }

    /**
     * Add item to the beginning or the end of the list
     * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#addItemToListFirstLast
     * @param inputs a list, item and an option for first or last position
     * @returns list with added item
     * @group add
     * @shortname item at first or last
     * @drawable false
     */
    addItemToListFirstLast(inputs: Inputs.Lists.AddItemToListFirstLastDto): any {
        const cloned = structuredClone(inputs.list);
        if (inputs.position === Inputs.Lists.FirstLastEnum.first) {
            cloned.unshift(inputs.item);
        } else {
            cloned.push(inputs.item);
        }
        return cloned;
    }

    /**
     * Creates an empty list
     * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#createList
     * @returns an empty array list
     * @group create
     * @shortname empty list
     * @drawable false
     */
    createEmptyList(): [] {
        return [];
    }

    /**
     * Repeat the item and add it in the new list
     * @link https://docs.bitbybit.dev/classes/bitbybit_lists.Lists.html#multiply
     * @param inputs an item to multiply
     * @returns list
     * @group create
     * @shortname repeat
     * @drawable false
     */
    repeat(inputs: Inputs.Lists.MultiplyItemDto): any {        
        let result = [];
        for (let i = 0; i < inputs.times; i++) {
            result.push(inputs.item);
        }
        return result;
    }
}
