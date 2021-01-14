import { Mesh } from '@babylonjs/core';
import { BaseTypes } from '../bitbybit/base-types';

// tslint:disable-next-line: no-namespace
export namespace Tag {
    export class DrawTagDto {
        /**
         * Text tag to draw
         */
        tag: BaseTypes.TagDto;
        /**
         * Indicates that it is updatable tag
         */
        updatable: boolean;
        /**
         * Optional existing tag in case it needs updating
         */
        tagVariable?: BaseTypes.TagDto;
    }
    export class DrawTagsDto {
        /**
         * Text tag to draw
         */
        tags: BaseTypes.TagDto[];
        /**
         * Indicates that it is updatable tag
         */
        updatable: boolean;
        /**
         * Optional existing tag in case it needs updating
         */
        tagsVariable?: BaseTypes.TagDto[];
    }
}
