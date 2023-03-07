Blockly.defineBlocksWithJsonArray([
{
    "type": "lottie_animation",
    "message0": " Animation %1 Name %2 Match Name %3 Version %4 Framerate %5 %6 In Point %7 %8 Out Point %9 %10 Width %11 %12 Height %13 %14 Threedimensional %15 %16 Assets %17 Extra Compositions %18 Fonts %19 Characters %20 Metadata %21 User Metadata %22 Markers %23 Motion Blur %24 Layers %25",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "value"
        },
        {
            "type": "field_number",
            "name": "fr",
            "value": 60
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "ip",
            "value": 0
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "op",
            "value": 60
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "w",
            "value": 512
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "h",
            "value": 512
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "ddd",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "assets",
            "check": "assets"
        },
        {
            "type": "input_statement",
            "name": "comps",
            "check": "lottie_precomposition"
        },
        {
            "type": "input_value",
            "name": "fonts",
            "check": "lottie_font_list"
        },
        {
            "type": "input_statement",
            "name": "chars",
            "check": "lottie_character_data"
        },
        {
            "type": "input_value",
            "name": "meta",
            "check": "lottie_metadata"
        },
        {
            "type": "input_value",
            "name": "metadata",
            "check": "lottie_user_metadata"
        },
        {
            "type": "input_statement",
            "name": "markers"
        },
        {
            "type": "input_value",
            "name": "mb",
            "check": "lottie_motion_blur"
        },
        {
            "type": "input_statement",
            "name": "layers",
            "check": "layers"
        }
    ],
    "colour": 260,
    "helpUrl": "/lottie-docs/animation/#animation",
    "tooltip": "Animation",
    "inputsInline": false
},
{
    "type": "lottie_metadata",
    "message0": " Metadata %1 Author %2 Description %3 Theme Color %4 Generator %5",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "d",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "tc",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "g",
            "check": "value"
        }
    ],
    "colour": 260,
    "helpUrl": "/lottie-docs/animation/#metadata",
    "tooltip": "Metadata",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_motion_blur",
    "message0": " Motion Blur %1 Shutter Angle %2 Shutter Phase %3 Samples per Frame %4 Adaptive Sample Limit %5",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "sa",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "sp",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "spf",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "asl",
            "check": "value"
        }
    ],
    "colour": 260,
    "helpUrl": "/lottie-docs/animation/#motion-blur",
    "tooltip": "Motion Blur",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_user_metadata",
    "message0": " User Metadata %1 Filename %2 Custom Properties %3",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "filename",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "customProps"
        }
    ],
    "colour": 260,
    "helpUrl": "/lottie-docs/animation/#user-metadata",
    "tooltip": "User Metadata",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_layer_common",
    "message0": " Layer Properties %1 Name %2 Match Name %3 Threedimensional %4 %5 Hidden %6 %7 Index %8 Parent Index %9 Time Stretch %10 In Point %11 %12 Out Point %13 %14 Start Time %15 %16",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "ddd",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ind",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "parent",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "sr",
            "check": "value"
        },
        {
            "type": "field_number",
            "name": "ip"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "op"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "st",
            "value": 0
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 0,
    "helpUrl": "/lottie-docs/layers/#layer",
    "tooltip": "Layer Properties",
    "inputsInline": false,
    "output": "lottie_layer_common"
},
{
    "type": "lottie_audio_layer",
    "message0": " Audio Layer %1 Layer Properties %2 Type %3 %4 Audio Settings %5 Sound Id %6",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "6"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "au",
            "check": "lottie_audio_settings"
        },
        {
            "type": "input_value",
            "name": "refId",
            "check": "value"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#audio-layer",
    "tooltip": "Audio Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_audio_settings",
    "message0": " Audio Settings %1 Level %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lv",
            "check": "property"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#audio-settings",
    "tooltip": "Audio Settings",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_camera_layer",
    "message0": " Camera Layer %1 Layer Properties %2 Type %3 %4 Transform %5 Perspective %6",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "13"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "input_value",
            "name": "pe",
            "check": "property"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#camera-layer",
    "tooltip": "Camera Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_data_layer",
    "message0": " Data Layer %1 Layer Properties %2 Type %3 %4 Data source Id %5",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "15"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "refId",
            "check": "value"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#data-layer",
    "tooltip": "Data Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_image_layer",
    "message0": " Image Layer %1 Layer Properties %2 Collapse Transform %3 %4 Transform %5 Auto Orient %6 %7 Matte Mode %8 %9 Matte Target %10 Has Masks %11 %12 Masks %13 Effects %14 Motion Blur %15 %16 Layer style %17 Blend Mode %18 %19 CSS Class %20 Layer XML ID %21 Layer XML tag name %22 Type %23 %24 Image Id %25 %26",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_checkbox",
            "name": "cp"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "field_checkbox",
            "name": "ao",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "tt",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Alpha",
                    "1"
                ],
                [
                    "Inverted Alpha",
                    "2"
                ],
                [
                    "Luma",
                    "3"
                ],
                [
                    "Inverted Luma",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "td",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hasMask"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "masksProperties"
        },
        {
            "type": "input_statement",
            "name": "ef",
            "check": "effects"
        },
        {
            "type": "field_checkbox",
            "name": "mb"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "sy",
            "check": "styles"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "tg",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "2"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "refId",
            "text": ""
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#image-layer",
    "tooltip": "Image Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_layer",
    "message0": " Layer %1 Layer Properties %2 Type %3 %4 Custom Attributes %5 %6",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_number",
            "name": "ty"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "custom_attributes",
            "check": "object_member"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#layer",
    "tooltip": "Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_null_layer",
    "message0": " Null Layer %1 Layer Properties %2 Collapse Transform %3 %4 Transform %5 Auto Orient %6 %7 Matte Mode %8 %9 Matte Target %10 Has Masks %11 %12 Masks %13 Effects %14 Motion Blur %15 %16 Layer style %17 Blend Mode %18 %19 CSS Class %20 Layer XML ID %21 Layer XML tag name %22 Type %23 %24",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_checkbox",
            "name": "cp"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "field_checkbox",
            "name": "ao",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "tt",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Alpha",
                    "1"
                ],
                [
                    "Inverted Alpha",
                    "2"
                ],
                [
                    "Luma",
                    "3"
                ],
                [
                    "Inverted Luma",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "td",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hasMask"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "masksProperties"
        },
        {
            "type": "input_statement",
            "name": "ef",
            "check": "effects"
        },
        {
            "type": "field_checkbox",
            "name": "mb"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "sy",
            "check": "styles"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "tg",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "3"
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#null-layer",
    "tooltip": "Null Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_precomposition_layer",
    "message0": " Precomposition Layer %1 Layer Properties %2 Collapse Transform %3 %4 Transform %5 Auto Orient %6 %7 Matte Mode %8 %9 Matte Target %10 Has Masks %11 %12 Masks %13 Effects %14 Motion Blur %15 %16 Layer style %17 Blend Mode %18 %19 CSS Class %20 Layer XML ID %21 Layer XML tag name %22 Type %23 %24 Reference Id %25 %26 Width %27 %28 Height %29 %30 Time Remapping %31",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_checkbox",
            "name": "cp"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "field_checkbox",
            "name": "ao",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "tt",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Alpha",
                    "1"
                ],
                [
                    "Inverted Alpha",
                    "2"
                ],
                [
                    "Luma",
                    "3"
                ],
                [
                    "Inverted Luma",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "td",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hasMask"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "masksProperties"
        },
        {
            "type": "input_statement",
            "name": "ef",
            "check": "effects"
        },
        {
            "type": "field_checkbox",
            "name": "mb"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "sy",
            "check": "styles"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "tg",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "0"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "refId"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "w"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "h"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "tm",
            "check": "property"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#precomposition-layer",
    "tooltip": "Precomposition Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_shape_layer",
    "message0": " Shape Layer %1 Layer Properties %2 Collapse Transform %3 %4 Transform %5 Auto Orient %6 %7 Matte Mode %8 %9 Matte Target %10 Has Masks %11 %12 Masks %13 Effects %14 Motion Blur %15 %16 Layer style %17 Blend Mode %18 %19 CSS Class %20 Layer XML ID %21 Layer XML tag name %22 Type %23 %24 Shapes %25",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_checkbox",
            "name": "cp"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "field_checkbox",
            "name": "ao",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "tt",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Alpha",
                    "1"
                ],
                [
                    "Inverted Alpha",
                    "2"
                ],
                [
                    "Luma",
                    "3"
                ],
                [
                    "Inverted Luma",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "td",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hasMask"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "masksProperties"
        },
        {
            "type": "input_statement",
            "name": "ef",
            "check": "effects"
        },
        {
            "type": "field_checkbox",
            "name": "mb"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "sy",
            "check": "styles"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "tg",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "4"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "shapes",
            "check": "shapes"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#shape-layer",
    "tooltip": "Shape Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_solid_color_layer",
    "message0": " Solid Color Layer %1 Layer Properties %2 Collapse Transform %3 %4 Transform %5 Auto Orient %6 %7 Matte Mode %8 %9 Matte Target %10 Has Masks %11 %12 Masks %13 Effects %14 Motion Blur %15 %16 Layer style %17 Blend Mode %18 %19 CSS Class %20 Layer XML ID %21 Layer XML tag name %22 Type %23 %24 Color %25 %26 Height %27 %28 Width %29 %30",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_checkbox",
            "name": "cp"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "field_checkbox",
            "name": "ao",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "tt",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Alpha",
                    "1"
                ],
                [
                    "Inverted Alpha",
                    "2"
                ],
                [
                    "Luma",
                    "3"
                ],
                [
                    "Inverted Luma",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "td",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hasMask"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "masksProperties"
        },
        {
            "type": "input_statement",
            "name": "ef",
            "check": "effects"
        },
        {
            "type": "field_checkbox",
            "name": "mb"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "sy",
            "check": "styles"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "tg",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "1"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "sc",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "sh"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "sw"
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#solid-color-layer",
    "tooltip": "Solid Color Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_text_layer",
    "message0": " Text Layer %1 Layer Properties %2 Collapse Transform %3 %4 Transform %5 Auto Orient %6 %7 Matte Mode %8 %9 Matte Target %10 Has Masks %11 %12 Masks %13 Effects %14 Motion Blur %15 %16 Layer style %17 Blend Mode %18 %19 CSS Class %20 Layer XML ID %21 Layer XML tag name %22 Type %23 %24 Data %25",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_checkbox",
            "name": "cp"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "field_checkbox",
            "name": "ao",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "tt",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Alpha",
                    "1"
                ],
                [
                    "Inverted Alpha",
                    "2"
                ],
                [
                    "Luma",
                    "3"
                ],
                [
                    "Inverted Luma",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "td",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hasMask"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "masksProperties"
        },
        {
            "type": "input_statement",
            "name": "ef",
            "check": "effects"
        },
        {
            "type": "field_checkbox",
            "name": "mb"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "sy",
            "check": "styles"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "tg",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "5"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "t",
            "check": "lottie_text_data"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#text-layer",
    "tooltip": "Text Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_visual_layer",
    "message0": " Visual Layer %1 Layer Properties %2 Collapse Transform %3 %4 Transform %5 Auto Orient %6 %7 Matte Mode %8 %9 Matte Target %10 Has Masks %11 %12 Masks %13 Effects %14 Motion Blur %15 %16 Layer style %17 Blend Mode %18 %19 CSS Class %20 Layer XML ID %21 Layer XML tag name %22",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lottie_layer_common",
            "check": "lottie_layer_common"
        },
        {
            "type": "field_checkbox",
            "name": "cp"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "field_checkbox",
            "name": "ao",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "tt",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Alpha",
                    "1"
                ],
                [
                    "Inverted Alpha",
                    "2"
                ],
                [
                    "Luma",
                    "3"
                ],
                [
                    "Inverted Luma",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "td",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hasMask"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "masksProperties"
        },
        {
            "type": "input_statement",
            "name": "ef",
            "check": "effects"
        },
        {
            "type": "field_checkbox",
            "name": "mb"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "sy",
            "check": "styles"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "tg",
            "check": "value"
        }
    ],
    "colour": 60,
    "helpUrl": "/lottie-docs/layers/#layer",
    "tooltip": "Visual Layer",
    "inputsInline": false,
    "previousStatement": "layers",
    "nextStatement": "layers"
},
{
    "type": "lottie_ellipse",
    "message0": " Ellipse %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Direction %14 %15 Position %16 Size %17",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/circle.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "el"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "field_dropdown",
            "name": "d",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "1"
                ],
                [
                    "Reversed",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "p",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#ellipse",
    "tooltip": "Ellipse",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_fill",
    "message0": " Fill %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Opacity %14 Color %15 Fill Rule %16 %17",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/fill-drip.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "fl"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "c",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "r",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Non Zero",
                    "1"
                ],
                [
                    "Even Odd",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#fill",
    "tooltip": "Fill",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_gradient_fill",
    "message0": " Gradient Fill %1 Name %2 Match Name %3 Hidden %4 %5 Shape Type %6 %7 Blend Mode %8 %9 Property index %10 CSS Class %11 Layer XML ID %12 Start Point %13 End Point %14 Gradient Type %15 %16 Highlight Length %17 Highlight Angle %18 Colors %19 Opacity %20 Fill Rule %21 %22",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "gf"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "e",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "t",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Linear",
                    "1"
                ],
                [
                    "Radial",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "h",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "g",
            "check": "lottie_gradient_colors"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "r",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Non Zero",
                    "1"
                ],
                [
                    "Even Odd",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#gradients",
    "tooltip": "Gradient Fill",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_gradient_stroke",
    "message0": " Gradient Stroke %1 Name %2 Match Name %3 Hidden %4 %5 Shape Type %6 %7 Blend Mode %8 %9 Property index %10 CSS Class %11 Layer XML ID %12 Line Cap %13 %14 Line Join %15 %16 Miter Limit %17 Miter Limit %18 Opacity %19 Width %20 Dashes %21 Start Point %22 End Point %23 Gradient Type %24 %25 Highlight Length %26 Highlight Angle %27 Colors %28",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "gs"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "field_dropdown",
            "name": "lc",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Butt",
                    "1"
                ],
                [
                    "Round",
                    "2"
                ],
                [
                    "Square",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "lj",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Miter",
                    "1"
                ],
                [
                    "Round",
                    "2"
                ],
                [
                    "Bevel",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ml",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ml2",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "w",
            "check": "property"
        },
        {
            "type": "input_statement",
            "name": "d",
            "check": "lottie_stroke_dash"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "e",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "t",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Linear",
                    "1"
                ],
                [
                    "Radial",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "h",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "g",
            "check": "lottie_gradient_colors"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#gradients",
    "tooltip": "Gradient Stroke",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_group",
    "message0": " Group %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Number Of Properties %14 Shapes %15 Property index %16",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/object-group.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "gr"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "it",
            "check": "shapes"
        },
        {
            "type": "input_value",
            "name": "cix",
            "check": "value"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#group",
    "tooltip": "Group",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_no_style",
    "message0": " No Style %1 Name %2 Match Name %3 Hidden %4 %5 Shape Type %6 %7 Blend Mode %8 %9 Property index %10 CSS Class %11 Layer XML ID %12",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "no"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#no-style",
    "tooltip": "No Style",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_path",
    "message0": " Path %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Direction %14 %15 Shape %16",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/bezier-curve.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "sh"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "field_dropdown",
            "name": "d",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "1"
                ],
                [
                    "Reversed",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#path",
    "tooltip": "Path",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_polystar",
    "message0": " PolyStar %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Direction %14 %15 Position %16 Outer Radius %17 Outer Roundness %18 Rotation %19 Points %20 Star Type %21 %22 Inner Radius %23 Inner Roundness %24",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/star.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "sr"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "field_dropdown",
            "name": "d",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "1"
                ],
                [
                    "Reversed",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "p",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "or",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "os",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "r",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "pt",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "sy",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Star",
                    "1"
                ],
                [
                    "Polygon",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ir",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "is",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#polystar",
    "tooltip": "PolyStar",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_pucker_bloat",
    "message0": " Pucker Bloat %1 Name %2 Match Name %3 Hidden %4 %5 Shape Type %6 %7 Blend Mode %8 %9 Property index %10 CSS Class %11 Layer XML ID %12 Amount %13",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "pb"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#pucker-bloat",
    "tooltip": "Pucker Bloat",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_rectangle",
    "message0": " Rectangle %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Direction %14 %15 Position %16 Size %17 Rounded %18",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/square.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "rc"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "field_dropdown",
            "name": "d",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "1"
                ],
                [
                    "Reversed",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "p",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "r",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#rectangle",
    "tooltip": "Rectangle",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_repeater",
    "message0": " Repeater %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Copies %14 Offset %15 Composite %16 %17 Transform %18",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/clone.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "rp"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "c",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "m",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Above",
                    "1"
                ],
                [
                    "Below",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "tr",
            "check": "lottie_repeater_transform"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#repeater",
    "tooltip": "Repeater",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_repeater_transform",
    "message0": " Repeater Transform %1 Anchor Point %2 Scale %3 Opacity %4 Skew %5 Skew Axis %6 Start Opacity %7 End Opacity %8",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sk",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sa",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "so",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "eo",
            "check": "property"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/shapes/#repeater-transform",
    "tooltip": "Repeater Transform",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_rounded_corners",
    "message0": " Rounded Corners %1 Name %2 Match Name %3 Hidden %4 %5 Shape Type %6 %7 Blend Mode %8 %9 Property index %10 CSS Class %11 Layer XML ID %12 Radius %13",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "rd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "r",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#rounded-corners",
    "tooltip": "Rounded Corners",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_shape_element",
    "message0": " Shape Element %1 Name %2 Match Name %3 Hidden %4 %5 Shape Type %6 %7 Blend Mode %8 %9 Property index %10 CSS Class %11 Layer XML ID %12 Custom Attributes %13 %14",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "ty"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "custom_attributes",
            "check": "object_member"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#shape-elements",
    "tooltip": "Shape Element",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_stroke",
    "message0": " Stroke %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Line Cap %14 %15 Line Join %16 %17 Miter Limit %18 Miter Limit %19 Opacity %20 Width %21 Dashes %22 Color %23",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/border-style.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "st"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "field_dropdown",
            "name": "lc",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Butt",
                    "1"
                ],
                [
                    "Round",
                    "2"
                ],
                [
                    "Square",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "lj",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Miter",
                    "1"
                ],
                [
                    "Round",
                    "2"
                ],
                [
                    "Bevel",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ml",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ml2",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "w",
            "check": "property"
        },
        {
            "type": "input_statement",
            "name": "d",
            "check": "lottie_stroke_dash"
        },
        {
            "type": "input_value",
            "name": "c",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#stroke",
    "tooltip": "Stroke",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_stroke_dash",
    "message0": " Stroke Dash %1 Name %2 Match Name %3 Dash Type %4 %5 Length %6",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_dropdown",
            "name": "n",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Dash",
                    "d"
                ],
                [
                    "Gap",
                    "g"
                ],
                [
                    "Offset",
                    "o"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "property"
        }
    ],
    "colour": 0,
    "helpUrl": "/lottie-docs/shapes/#stroke-dashes",
    "tooltip": "Stroke Dash",
    "inputsInline": false,
    "previousStatement": "lottie_stroke_dash",
    "nextStatement": "lottie_stroke_dash"
},
{
    "type": "lottie_transform_shape",
    "message0": " Transform Shape %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Anchor Point %14 Position %15 Scale %16 Opacity %17 Skew %18 Skew Axis %19",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/arrows-alt.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "tr"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "p",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sk",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sa",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#transform-shape",
    "tooltip": "Transform Shape",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_trim",
    "message0": " Trim %1 %2 Name %3 Match Name %4 Hidden %5 %6 Shape Type %7 %8 Blend Mode %9 %10 Property index %11 CSS Class %12 Layer XML ID %13 Start %14 End %15 Offset %16 Multiple %17 %18",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/star-half.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "tm"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "e",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "m",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Individually",
                    "1"
                ],
                [
                    "Simultaneously",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#trim-path",
    "tooltip": "Trim",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_zig_zag",
    "message0": " Zig Zag %1 Name %2 Match Name %3 Hidden %4 %5 Shape Type %6 %7 Blend Mode %8 %9 Property index %10 CSS Class %11 Layer XML ID %12 Frequency %13 Amplitude %14 Point Type %15",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "hd"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "zz"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "bm",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Normal",
                    "0"
                ],
                [
                    "Multiply",
                    "1"
                ],
                [
                    "Screen",
                    "2"
                ],
                [
                    "Overlay",
                    "3"
                ],
                [
                    "Darken",
                    "4"
                ],
                [
                    "Lighten",
                    "5"
                ],
                [
                    "Color Dodge",
                    "6"
                ],
                [
                    "Color Burn",
                    "7"
                ],
                [
                    "Hard Light",
                    "8"
                ],
                [
                    "Soft Light",
                    "9"
                ],
                [
                    "Difference",
                    "10"
                ],
                [
                    "Exclusion",
                    "11"
                ],
                [
                    "Hue",
                    "12"
                ],
                [
                    "Saturation",
                    "13"
                ],
                [
                    "Color",
                    "14"
                ],
                [
                    "Luminosity",
                    "15"
                ],
                [
                    "Add",
                    "16"
                ],
                [
                    "Hard Mix",
                    "17"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "cl",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ln",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "r",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "pt",
            "check": "property"
        }
    ],
    "colour": 120,
    "helpUrl": "/lottie-docs/shapes/#zig-zag",
    "tooltip": "Zig Zag",
    "inputsInline": false,
    "previousStatement": "shapes",
    "nextStatement": "shapes"
},
{
    "type": "lottie_asset",
    "message0": " Asset %1 ID %2 %3 Name %4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "id",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        }
    ],
    "colour": 30,
    "helpUrl": "/lottie-docs/assets/#assets",
    "tooltip": "Asset",
    "inputsInline": false,
    "previousStatement": "assets",
    "nextStatement": "assets"
},
{
    "type": "lottie_data_source",
    "message0": " Data source %1 ID %2 %3 Name %4 Path %5 File name %6 %7 Embedded %8 %9 Type %10 %11",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "id",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "u",
            "check": "value"
        },
        {
            "type": "field_input",
            "name": "p",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "e",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "t",
            "text": "3"
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 30,
    "helpUrl": "/lottie-docs/assets/#data-source",
    "tooltip": "Data source",
    "inputsInline": false,
    "previousStatement": "assets",
    "nextStatement": "assets"
},
{
    "type": "lottie_file_asset",
    "message0": " File Asset %1 ID %2 %3 Name %4 Path %5 File name %6 %7 Embedded %8 %9",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "id",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "u",
            "check": "value"
        },
        {
            "type": "field_input",
            "name": "p",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "e",
            "checked": false
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 30,
    "helpUrl": "/lottie-docs/assets/#data-source",
    "tooltip": "File Asset",
    "inputsInline": false,
    "previousStatement": "assets",
    "nextStatement": "assets"
},
{
    "type": "lottie_image",
    "message0": " Image %1 %2 ID %3 %4 Name %5 Path %6 File name %7 %8 Embedded %9 %10 Width %11 Height %12 Type %13 %14",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/image.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "id",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "u",
            "check": "value"
        },
        {
            "type": "field_input",
            "name": "p",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "e",
            "checked": false
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "w",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "h",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "t",
            "text": "seq"
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 30,
    "helpUrl": "/lottie-docs/assets/#image",
    "tooltip": "Image",
    "inputsInline": false,
    "previousStatement": "assets",
    "nextStatement": "assets"
},
{
    "type": "lottie_precomposition",
    "message0": " Precomposition %1 %2 ID %3 %4 Name %5 Layers %6 Framerate %7 Extra %8 %9",
    "args0": [
        {
            "type": "field_image",
            "src": "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/regular/folder-open.svg",
            "width": 16,
            "height": 16
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "id",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "layers",
            "check": "layers"
        },
        {
            "type": "input_value",
            "name": "fr",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "xt",
            "checked": false
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 30,
    "helpUrl": "/lottie-docs/assets/#precomposition",
    "tooltip": "Precomposition",
    "inputsInline": false,
    "previousStatement": "assets",
    "nextStatement": "assets"
},
{
    "type": "lottie_sound",
    "message0": " Sound %1 ID %2 %3 Name %4 Path %5 File name %6 %7 Embedded %8 %9",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "id",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "u",
            "check": "value"
        },
        {
            "type": "field_input",
            "name": "p",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "e",
            "checked": false
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 30,
    "helpUrl": "/lottie-docs/assets/#sound",
    "tooltip": "Sound",
    "inputsInline": false,
    "previousStatement": "assets",
    "nextStatement": "assets"
},
{
    "type": "lottie_displacement_map_effect",
    "message0": " Displacement Map Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "27"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#displacement-map-effect",
    "tooltip": "Displacement Map Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_drop_shadow_effect",
    "message0": " Drop Shadow Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "25"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#drop-shadow-effect",
    "tooltip": "Drop Shadow Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_effect",
    "message0": " Effect %1 Name %2 Match Name %3 Effect Values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10 Custom Attributes %11 %12",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef",
            "check": "effect_values"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_number",
            "name": "ty"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "custom_attributes",
            "check": "object_member"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#effects",
    "tooltip": "Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_fill_effect",
    "message0": " Fill Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "21"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#fill-effect",
    "tooltip": "Fill Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_gaussian_blur_effect",
    "message0": " Gaussian Blur Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "29"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#gaussian-blur-effect",
    "tooltip": "Gaussian Blur Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_matte3_effect",
    "message0": " Set Matte Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "28"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#matte3-effect",
    "tooltip": "Set Matte Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_mesh_warp_effect",
    "message0": " Mesh Warp Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "31"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#mesh-warp-effect",
    "tooltip": "Mesh Warp Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_paint_over_transparent_effect",
    "message0": " Paint over transparent effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "7"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#paint-over-transparent-effect",
    "tooltip": "Paint over transparent effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_pro_levels_effect",
    "message0": " Pro Levels Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "24"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#pro-levels-effect",
    "tooltip": "Pro Levels Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_puppet_effect",
    "message0": " Puppet Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "34"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#puppet-effect",
    "tooltip": "Puppet Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_radial_wipe_effect",
    "message0": " Radial Wipe %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "26"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#radial-wipe-effect",
    "tooltip": "Radial Wipe",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_spherize_effect",
    "message0": " Spherize Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "33"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#spherize-effect",
    "tooltip": "Spherize Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_stroke_effect",
    "message0": " Stroke Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "22"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#stroke-effect",
    "tooltip": "Stroke Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_tint_effect",
    "message0": " Tint Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "20"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#tint-effect",
    "tooltip": "Tint Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_tritone_effect",
    "message0": " Tritone Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "23"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#tritone-effect",
    "tooltip": "Tritone Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_wavy_effect",
    "message0": " Wavy Effect %1 Name %2 Match Name %3 Effect values %4 Property Count %5 Effect Index %6 Type %7 %8 Enabled %9 %10",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_statement",
            "name": "ef"
        },
        {
            "type": "input_value",
            "name": "np",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "32"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "en",
            "checked": true
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 330,
    "helpUrl": "/lottie-docs/effects/#wavy-effect",
    "tooltip": "Wavy Effect",
    "inputsInline": false,
    "previousStatement": "effects",
    "nextStatement": "effects"
},
{
    "type": "lottie_effect_value_angle",
    "message0": " Effect Value Angle %1 Name %2 Match Name %3 Effect Index %4 Type %5 %6 Value %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "1"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "property"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#angle",
    "tooltip": "Effect Value Angle",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_checkbox",
    "message0": " Effect Value Checkbox %1 Name %2 Match Name %3 Effect Index %4 Type %5 %6 Value %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "4"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "property"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#checkbox",
    "tooltip": "Effect Value Checkbox",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_color",
    "message0": " Effect Value Color %1 Name %2 Match Name %3 Effect Index %4 Type %5 %6 Value %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "2"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "property"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#color",
    "tooltip": "Effect Value Color",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_drop_down",
    "message0": " Effect Value Drop Down %1 Name %2 Match Name %3 Effect Index %4 Type %5 %6 Value %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "7"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "property"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#drop-down",
    "tooltip": "Effect Value Drop Down",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_effect_value",
    "message0": " Effect Value %1 Name %2 Match Name %3 Effect Index %4 Type %5",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ty",
            "check": "value"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#effect-values",
    "tooltip": "Effect Value",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_ignored",
    "message0": " Ignored Value %1 Name %2 Match Name %3 Effect Index %4 Type %5 %6 Value %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "6"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "value"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#ignored",
    "tooltip": "Ignored Value",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_layer",
    "message0": " Effect Value Layer %1 Name %2 Match Name %3 Effect Index %4 Type %5 %6 Value %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "10"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "property"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#layer",
    "tooltip": "Effect Value Layer",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_no_value",
    "message0": " Effect No Value %1",
    "args0": [
        {
            "type": "input_dummy"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#no-value",
    "tooltip": "Effect No Value",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_point",
    "message0": " Effect Value Point %1 Name %2 Match Name %3 Effect Index %4 Type %5 %6 Value %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "3"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "property"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#point",
    "tooltip": "Effect Value Point",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_effect_value_slider",
    "message0": " Effect Value Slider %1 Name %2 Match Name %3 Effect Index %4 Type %5 %6 Value %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "mn",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ix",
            "check": "value"
        },
        {
            "type": "field_label_serializable",
            "name": "ty",
            "text": "0"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "v",
            "check": "property"
        }
    ],
    "colour": 300,
    "helpUrl": "/lottie-docs/effects/#slider",
    "tooltip": "Effect Value Slider",
    "inputsInline": false,
    "previousStatement": "effect-values",
    "nextStatement": "effect-values"
},
{
    "type": "lottie_animated_text_document",
    "message0": " Animated Text Document %1 Keyframes %2 Expression %3",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "k",
            "check": "lottie_text_document_keyframe"
        },
        {
            "type": "input_value",
            "name": "x",
            "check": "value"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#animated-text-document",
    "tooltip": "Animated Text Document",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_character_data",
    "message0": " Character Data %1 Character %2 %3 Font Family %4 %5 Font Size %6 %7 Font Style %8 %9 Width %10 %11",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "ch",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "fFamily",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "size",
            "value": 0
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "style",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "w",
            "value": 0
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#character-data",
    "tooltip": "Character Data",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_character_precomp",
    "message0": " Character Precomp %1 Reference Id %2 %3 Transform %4 In Point %5 Out Point %6 Time Stretch %7 Start Time %8",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "refId"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ks",
            "check": "lottie_transform"
        },
        {
            "type": "input_value",
            "name": "ip",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "op",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "sr",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "st",
            "check": "value"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#character-precomp",
    "tooltip": "Character Precomp",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_character_shapes",
    "message0": " Character Shape %1 Shapes %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "shapes",
            "check": "shapes"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#character-shapes",
    "tooltip": "Character Shape",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_font",
    "message0": " Font %1 Ascent %2 Font Family %3 %4 Name %5 %6 Font Style %7 %8 Path %9 Weight %10 Origin %11 %12 CSS Class %13",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ascent",
            "check": "value"
        },
        {
            "type": "field_input",
            "name": "fFamily",
            "text": "sans"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "fName",
            "text": "sans-Regular"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "fStyle",
            "text": "Regular"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "fPath",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "fWeight",
            "check": "value"
        },
        {
            "type": "field_dropdown",
            "name": "origin",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Local",
                    "0"
                ],
                [
                    "Css Url",
                    "1"
                ],
                [
                    "Script Url",
                    "2"
                ],
                [
                    "Font Url",
                    "3"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "fClass",
            "check": "value"
        }
    ],
    "colour": 30,
    "helpUrl": "/lottie-docs/text/#font-list",
    "tooltip": "Font",
    "inputsInline": false,
    "previousStatement": "lottie_font",
    "nextStatement": "lottie_font"
},
{
    "type": "lottie_font_list",
    "message0": " Font List %1 List %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "list",
            "check": "lottie_font"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#font-list",
    "tooltip": "Font List",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_text_alignment_options",
    "message0": " Text Alignment Options %1 Alignment %2 Grouping %3 %4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "g",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Characters",
                    "1"
                ],
                [
                    "Word",
                    "2"
                ],
                [
                    "Line",
                    "3"
                ],
                [
                    "All",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#text-alignment-options",
    "tooltip": "Text Alignment Options",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_text_data",
    "message0": " Text Data %1 Ranges %2 Document %3 Alignment %4 Follow Path %5",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "a",
            "check": "lottie_text_range"
        },
        {
            "type": "input_value",
            "name": "d",
            "check": "lottie_animated_text_document"
        },
        {
            "type": "input_value",
            "name": "m",
            "check": "lottie_text_alignment_options"
        },
        {
            "type": "input_value",
            "name": "p",
            "check": "lottie_text_follow_path"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#text-data",
    "tooltip": "Text Data",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_text_document",
    "message0": " Text Document %1 Font Family %2 %3 Fill Color %4 Stroke Color %5 Stroke Width %6 Stroke Over Fill %7 %8 Font Size %9 %10 Line Height %11 Wrap Size %12 Wrap Position %13 Text %14 %15 Justify %16 %17 Text Caps %18 %19 Tracking %20 Baseline Shift %21",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_input",
            "name": "f",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "fc",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "sc",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "sw",
            "check": "value"
        },
        {
            "type": "field_checkbox",
            "name": "of"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "s",
            "value": 10
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "lh",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "sz",
            "check": "color"
        },
        {
            "type": "input_value",
            "name": "ps",
            "check": "color"
        },
        {
            "type": "field_input",
            "name": "t",
            "text": ""
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "j",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Left",
                    "0"
                ],
                [
                    "Right",
                    "1"
                ],
                [
                    "Center",
                    "2"
                ],
                [
                    "Justify with Last Line Left",
                    "3"
                ],
                [
                    "Justify with Last Line Right",
                    "4"
                ],
                [
                    "Justify with Last Line Center",
                    "5"
                ],
                [
                    "Justify with Last Line Full",
                    "6"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "ca",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Regular",
                    "0"
                ],
                [
                    "All Caps",
                    "1"
                ],
                [
                    "Small Caps",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "tr",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "ls",
            "check": "value"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#text-document",
    "tooltip": "Text Document",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_text_document_keyframe",
    "message0": " Text Document Keyframe %1 Start %2 Time %3 %4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "lottie_text_document"
        },
        {
            "type": "field_number",
            "name": "t",
            "value": 0
        },
        {
            "type": "input_dummy"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#text-document-keyframe",
    "tooltip": "Text Document Keyframe",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_text_follow_path",
    "message0": " Text Follow Path %1 Mask %2 First Margin %3 Last Margin %4 Reverse Path %5 Force Alignment %6 Perpendicular To Path %7",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "m",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "f",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "l",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "r",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "p",
            "check": "property"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#text-follow-path",
    "tooltip": "Text Follow Path",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_text_range",
    "message0": " Text Range %1 Name %2 Selector %3 Style %4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "nm",
            "check": "value"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "lottie_text_range_selector"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "lottie_text_style"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#text-range",
    "tooltip": "Text Range",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_text_range_selector",
    "message0": " Text Range Selector %1 Expressible %2 %3 Max Ease %4 Min Ease %5 Max Amount %6 Based On %7 %8 Randomize %9 %10 Shape %11 %12 Offset %13 Range Units %14 %15 Selector Smoothness %16 Start %17 End %18",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "t"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "xe",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "ne",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "b",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Characters",
                    "1"
                ],
                [
                    "Character Excluding Spaces",
                    "2"
                ],
                [
                    "Words",
                    "3"
                ],
                [
                    "Lines",
                    "4"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_checkbox",
            "name": "rn"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_dropdown",
            "name": "sh",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Square",
                    "1"
                ],
                [
                    "Ramp Up",
                    "2"
                ],
                [
                    "Ramp Down",
                    "3"
                ],
                [
                    "Triangle",
                    "4"
                ],
                [
                    "Round",
                    "5"
                ],
                [
                    "Smooth",
                    "6"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "field_dropdown",
            "name": "r",
            "options": [
                [
                    "--",
                    ""
                ],
                [
                    "Percent",
                    "1"
                ],
                [
                    "Index",
                    "2"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "sm",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "e",
            "check": "property"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#text-range-selector",
    "tooltip": "Text Range Selector",
    "inputsInline": false,
    "output": null
},
{
    "type": "lottie_text_style",
    "message0": " Text Style %1 Anchor Point %2 Scale %3 Opacity %4 Skew %5 Skew Axis %6 Stroke Width %7 Stroke Color %8 Stroke Hue %9 Stroke Saturation %10 Stroke Brightness %11 Stroke Opacity %12 Fill Color %13 Fill Hue %14 Fill Saturation %15 Fill Brightness %16 Fill Opacity %17 Letter Spacing %18 Blur %19 Line Spacing %20",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "a",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "s",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "o",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sk",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sa",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sw",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sc",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sh",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "ss",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "sb",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "so",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "fc",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "fh",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "fs",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "fb",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "fo",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "t",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "bl",
            "check": "property"
        },
        {
            "type": "input_value",
            "name": "ls",
            "check": "property"
        }
    ],
    "colour": 200,
    "helpUrl": "/lottie-docs/text/#text-style",
    "tooltip": "Text Style",
    "inputsInline": false,
    "output": null
},
]);

const generated_toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Animation",
            "colour": 260,
            "contents": [
                {
                    "kind": "block",
                    "type": "lottie_animation",
                    "blockxml": "<block type=\"lottie_animation\"><field name=\"op\">60</field></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_metadata"
                },
                {
                    "kind": "block",
                    "type": "lottie_motion_blur"
                },
                {
                    "kind": "block",
                    "type": "lottie_user_metadata"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Layers",
            "colour": 60,
            "contents": [
                {
                    "kind": "block",
                    "type": "lottie_layer_common",
                    "blockxml": "<block type=\"lottie_layer_common\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_audio_layer",
                    "blockxml": "<block type=\"lottie_audio_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"au\"><block type=\"lottie_audio_settings\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_audio_settings"
                },
                {
                    "kind": "block",
                    "type": "lottie_camera_layer",
                    "blockxml": "<block type=\"lottie_camera_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"ks\"><block type=\"lottie_transform\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_data_layer",
                    "blockxml": "<block type=\"lottie_data_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_image_layer",
                    "blockxml": "<block type=\"lottie_image_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"ks\"><block type=\"lottie_transform\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_layer",
                    "blockxml": "<block type=\"lottie_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_null_layer",
                    "blockxml": "<block type=\"lottie_null_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"ks\"><block type=\"lottie_transform\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_precomposition_layer",
                    "blockxml": "<block type=\"lottie_precomposition_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"ks\"><block type=\"lottie_transform\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_shape_layer",
                    "blockxml": "<block type=\"lottie_shape_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"ks\"><block type=\"lottie_transform\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_solid_color_layer",
                    "blockxml": "<block type=\"lottie_solid_color_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"ks\"><block type=\"lottie_transform\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_layer",
                    "blockxml": "<block type=\"lottie_text_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"ks\"><block type=\"lottie_transform\" /></value><value name=\"t\"><block type=\"lottie_text_data\"><value name=\"d\"><block type=\"lottie_animated_text_document\" /></value><value name=\"m\"><block type=\"lottie_text_alignment_options\" /></value><value name=\"p\"><block type=\"lottie_text_follow_path\" /></value></block></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_visual_layer",
                    "blockxml": "<block type=\"lottie_visual_layer\"><value name=\"lottie_layer_common\"><block type=\"lottie_layer_common\" collapsed=\"true\"><value name=\"ks\"><shadow type=\"lottie_transform\" /></value><field name=\"op\">60</field></block></value><value name=\"ks\"><block type=\"lottie_transform\" /></value></block>"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Shapes",
            "colour": 120,
            "contents": [
                {
                    "kind": "block",
                    "type": "lottie_ellipse",
                    "blockxml": "<block type=\"lottie_ellipse\"><value name=\"p\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_vector2d\"><field name=\"x\">0</field><field name=\"y\">0</field></shadow></value></shadow></value><value name=\"s\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_vector2d\"><field name=\"x\">100</field><field name=\"y\">100</field></shadow></value></shadow></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_fill",
                    "blockxml": "<block type=\"lottie_fill\"><value name=\"c\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_color\"><field name=\"red\">0</field><field name=\"green\">0</field><field name=\"blue\">0</field></shadow></value></shadow></value><value name=\"o\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"json_number\"><field name=\"value\">100</field></shadow></value></shadow></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_gradient_fill",
                    "blockxml": "<block type=\"lottie_gradient_fill\"><value name=\"g\"><block type=\"lottie_gradient_colors\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_gradient_stroke",
                    "blockxml": "<block type=\"lottie_gradient_stroke\"><value name=\"g\"><block type=\"lottie_gradient_colors\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_group"
                },
                {
                    "kind": "block",
                    "type": "lottie_no_style"
                },
                {
                    "kind": "block",
                    "type": "lottie_path"
                },
                {
                    "kind": "block",
                    "type": "lottie_polystar",
                    "blockxml": "<block type=\"lottie_polystar\"><value name=\"p\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_vector2d\"><field name=\"x\">0</field><field name=\"y\">0</field></shadow></value></shadow></value><value name=\"pt\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"json_number\"><field name=\"value\">5</field></shadow></value></shadow></value><value name=\"or\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"json_number\"><field name=\"value\">100</field></shadow></value></shadow></value><value name=\"os\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"json_number\"><field name=\"value\">0</field></shadow></value></shadow></value><value name=\"r\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_angle\"><field name=\"value\">0</field></shadow></value></shadow></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_pucker_bloat"
                },
                {
                    "kind": "block",
                    "type": "lottie_rectangle",
                    "blockxml": "<block type=\"lottie_rectangle\"><value name=\"p\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_vector2d\"><field name=\"x\">0</field><field name=\"y\">0</field></shadow></value></shadow></value><value name=\"s\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_vector2d\"><field name=\"x\">100</field><field name=\"y\">100</field></shadow></value></shadow></value><value name=\"r\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"json_number\"><field name=\"value\">0</field></shadow></value></shadow></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_repeater",
                    "blockxml": "<block type=\"lottie_repeater\"><value name=\"tr\"><block type=\"lottie_repeater_transform\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_repeater_transform"
                },
                {
                    "kind": "block",
                    "type": "lottie_rounded_corners"
                },
                {
                    "kind": "block",
                    "type": "lottie_shape_element"
                },
                {
                    "kind": "block",
                    "type": "lottie_stroke",
                    "blockxml": "<block type=\"lottie_stroke\"><value name=\"c\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_color\"><field name=\"red\">0</field><field name=\"green\">0</field><field name=\"blue\">0</field></shadow></value></shadow></value><value name=\"o\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"json_number\"><field name=\"value\">100</field></shadow></value></shadow></value><value name=\"w\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"json_number\"><field name=\"value\">1</field></shadow></value></shadow></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_stroke_dash"
                },
                {
                    "kind": "block",
                    "type": "lottie_transform_shape",
                    "blockxml": "<block type=\"lottie_transform_shape\"><value name=\"s\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"lottie_vector2d\"><field name=\"x\">100</field><field name=\"y\">100</field></shadow></value></shadow></value><value name=\"o\"><shadow type=\"lottie_property_static\"><value name=\"value\"><shadow type=\"json_number\"><field name=\"value\">100</field></shadow></value></shadow></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_trim"
                },
                {
                    "kind": "block",
                    "type": "lottie_zig_zag"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Assets",
            "colour": 30,
            "contents": [
                {
                    "kind": "block",
                    "type": "lottie_asset"
                },
                {
                    "kind": "block",
                    "type": "lottie_data_source"
                },
                {
                    "kind": "block",
                    "type": "lottie_file_asset"
                },
                {
                    "kind": "block",
                    "type": "lottie_image"
                },
                {
                    "kind": "block",
                    "type": "lottie_precomposition"
                },
                {
                    "kind": "block",
                    "type": "lottie_sound"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Effects",
            "colour": 330,
            "contents": [
                {
                    "kind": "block",
                    "type": "lottie_displacement_map_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_drop_shadow_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_fill_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_gaussian_blur_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_matte3_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_mesh_warp_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_paint_over_transparent_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_pro_levels_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_puppet_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_radial_wipe_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_spherize_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_stroke_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_tint_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_tritone_effect"
                },
                {
                    "kind": "block",
                    "type": "lottie_wavy_effect"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Effect Values",
            "colour": 300,
            "contents": [
                {
                    "kind": "block",
                    "type": "lottie_effect_value_angle"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_checkbox"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_color"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_drop_down"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_effect_value"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_ignored"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_layer"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_no_value"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_point"
                },
                {
                    "kind": "block",
                    "type": "lottie_effect_value_slider"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Text",
            "colour": 200,
            "contents": [
                {
                    "kind": "block",
                    "type": "lottie_animated_text_document"
                },
                {
                    "kind": "block",
                    "type": "lottie_character_data"
                },
                {
                    "kind": "block",
                    "type": "lottie_character_precomp"
                },
                {
                    "kind": "block",
                    "type": "lottie_character_shapes"
                },
                {
                    "kind": "block",
                    "type": "lottie_font"
                },
                {
                    "kind": "block",
                    "type": "lottie_font_list"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_alignment_options"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_data",
                    "blockxml": "<block type=\"lottie_text_data\"><value name=\"d\"><block type=\"lottie_animated_text_document\" /></value><value name=\"m\"><block type=\"lottie_text_alignment_options\" /></value><value name=\"p\"><block type=\"lottie_text_follow_path\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_document"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_document_keyframe",
                    "blockxml": "<block type=\"lottie_text_document_keyframe\"><value name=\"s\"><block type=\"lottie_text_document\" /></value></block>"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_follow_path"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_range"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_range_selector"
                },
                {
                    "kind": "block",
                    "type": "lottie_text_style"
                }
            ]
        }
    ]
};

class GeneratedGenerator {
lottie_animation(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'v': this.input_to_json(block, 'v'),
        'fr': Number(block.getFieldValue('fr')),
        'ip': Number(block.getFieldValue('ip')),
        'op': Number(block.getFieldValue('op')),
        'w': Number(block.getFieldValue('w')),
        'h': Number(block.getFieldValue('h')),
        'ddd': 'TRUE' == block.getFieldValue('ddd') ? 1 : 0,
        'assets': this.statements_to_json(block, 'assets', false),
        'comps': this.statements_to_json(block, 'comps', false),
        'fonts': this.input_to_json(block, 'fonts'),
        'chars': this.statements_to_json(block, 'chars', true),
        'meta': this.input_to_json(block, 'meta'),
        'metadata': this.input_to_json(block, 'metadata'),
        'markers': this.statements_to_json(block, 'markers', false),
        'mb': this.input_to_json(block, 'mb'),
        'layers': this.statements_to_json(block, 'layers', false)
    };
}
lottie_metadata(block)
{
    return {
        'a': this.input_to_json(block, 'a'),
        'd': this.input_to_json(block, 'd'),
        'tc': this.input_to_json(block, 'tc'),
        'g': this.input_to_json(block, 'g')
    };
}
lottie_motion_blur(block)
{
    return {
        'sa': this.input_to_json(block, 'sa'),
        'sp': this.input_to_json(block, 'sp'),
        'spf': this.input_to_json(block, 'spf'),
        'asl': this.input_to_json(block, 'asl')
    };
}
lottie_user_metadata(block)
{
    return {
        'filename': this.input_to_json(block, 'filename'),
        'customProps': this.input_to_json(block, 'customProps')
    };
}
lottie_layer_common(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ddd': 'TRUE' == block.getFieldValue('ddd') ? 1 : 0,
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ind': this.input_to_json(block, 'ind'),
        'parent': this.input_to_json(block, 'parent'),
        'sr': this.input_to_json(block, 'sr'),
        'ip': Number(block.getFieldValue('ip')),
        'op': Number(block.getFieldValue('op')),
        'st': Number(block.getFieldValue('st'))
    };
}
lottie_audio_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'ty': Number(block.getFieldValue('ty')),
        'au': this.input_to_json(block, 'au'),
        'refId': this.input_to_json(block, 'refId')
    };
}
lottie_audio_settings(block)
{
    return {
        'lv': this.input_to_json(block, 'lv')
    };
}
lottie_camera_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'ty': Number(block.getFieldValue('ty')),
        'ks': this.input_to_json(block, 'ks'),
        'pe': this.input_to_json(block, 'pe')
    };
}
lottie_data_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'ty': Number(block.getFieldValue('ty')),
        'refId': this.input_to_json(block, 'refId')
    };
}
lottie_image_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'cp': 'TRUE' == block.getFieldValue('cp'),
        'ks': this.input_to_json(block, 'ks'),
        'ao': 'TRUE' == block.getFieldValue('ao') ? 1 : 0,
        'tt': block.getFieldValue('tt') === '' ? undefined : Number(block.getFieldValue('tt')),
        'td': this.input_to_json(block, 'td'),
        'hasMask': 'TRUE' == block.getFieldValue('hasMask'),
        'masksProperties': this.statements_to_json(block, 'masksProperties', false),
        'ef': this.statements_to_json(block, 'ef', false),
        'mb': 'TRUE' == block.getFieldValue('mb'),
        'sy': this.statements_to_json(block, 'sy', false),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'tg': this.input_to_json(block, 'tg'),
        'ty': Number(block.getFieldValue('ty')),
        'refId': block.getFieldValue('refId')
    };
}
lottie_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'ty': Number(block.getFieldValue('ty')),
        ...this.object_members_to_json(block, 'custom_attributes')
    };
}
lottie_null_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'cp': 'TRUE' == block.getFieldValue('cp'),
        'ks': this.input_to_json(block, 'ks'),
        'ao': 'TRUE' == block.getFieldValue('ao') ? 1 : 0,
        'tt': block.getFieldValue('tt') === '' ? undefined : Number(block.getFieldValue('tt')),
        'td': this.input_to_json(block, 'td'),
        'hasMask': 'TRUE' == block.getFieldValue('hasMask'),
        'masksProperties': this.statements_to_json(block, 'masksProperties', false),
        'ef': this.statements_to_json(block, 'ef', false),
        'mb': 'TRUE' == block.getFieldValue('mb'),
        'sy': this.statements_to_json(block, 'sy', false),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'tg': this.input_to_json(block, 'tg'),
        'ty': Number(block.getFieldValue('ty'))
    };
}
lottie_precomposition_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'cp': 'TRUE' == block.getFieldValue('cp'),
        'ks': this.input_to_json(block, 'ks'),
        'ao': 'TRUE' == block.getFieldValue('ao') ? 1 : 0,
        'tt': block.getFieldValue('tt') === '' ? undefined : Number(block.getFieldValue('tt')),
        'td': this.input_to_json(block, 'td'),
        'hasMask': 'TRUE' == block.getFieldValue('hasMask'),
        'masksProperties': this.statements_to_json(block, 'masksProperties', false),
        'ef': this.statements_to_json(block, 'ef', false),
        'mb': 'TRUE' == block.getFieldValue('mb'),
        'sy': this.statements_to_json(block, 'sy', false),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'tg': this.input_to_json(block, 'tg'),
        'ty': Number(block.getFieldValue('ty')),
        'refId': block.getFieldValue('refId'),
        'w': Number(block.getFieldValue('w')),
        'h': Number(block.getFieldValue('h')),
        'tm': this.input_to_json(block, 'tm')
    };
}
lottie_shape_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'cp': 'TRUE' == block.getFieldValue('cp'),
        'ks': this.input_to_json(block, 'ks'),
        'ao': 'TRUE' == block.getFieldValue('ao') ? 1 : 0,
        'tt': block.getFieldValue('tt') === '' ? undefined : Number(block.getFieldValue('tt')),
        'td': this.input_to_json(block, 'td'),
        'hasMask': 'TRUE' == block.getFieldValue('hasMask'),
        'masksProperties': this.statements_to_json(block, 'masksProperties', false),
        'ef': this.statements_to_json(block, 'ef', false),
        'mb': 'TRUE' == block.getFieldValue('mb'),
        'sy': this.statements_to_json(block, 'sy', false),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'tg': this.input_to_json(block, 'tg'),
        'ty': Number(block.getFieldValue('ty')),
        'shapes': this.statements_to_json(block, 'shapes', false)
    };
}
lottie_solid_color_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'cp': 'TRUE' == block.getFieldValue('cp'),
        'ks': this.input_to_json(block, 'ks'),
        'ao': 'TRUE' == block.getFieldValue('ao') ? 1 : 0,
        'tt': block.getFieldValue('tt') === '' ? undefined : Number(block.getFieldValue('tt')),
        'td': this.input_to_json(block, 'td'),
        'hasMask': 'TRUE' == block.getFieldValue('hasMask'),
        'masksProperties': this.statements_to_json(block, 'masksProperties', false),
        'ef': this.statements_to_json(block, 'ef', false),
        'mb': 'TRUE' == block.getFieldValue('mb'),
        'sy': this.statements_to_json(block, 'sy', false),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'tg': this.input_to_json(block, 'tg'),
        'ty': Number(block.getFieldValue('ty')),
        'sc': block.getFieldValue('sc'),
        'sh': Number(block.getFieldValue('sh')),
        'sw': Number(block.getFieldValue('sw'))
    };
}
lottie_text_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'cp': 'TRUE' == block.getFieldValue('cp'),
        'ks': this.input_to_json(block, 'ks'),
        'ao': 'TRUE' == block.getFieldValue('ao') ? 1 : 0,
        'tt': block.getFieldValue('tt') === '' ? undefined : Number(block.getFieldValue('tt')),
        'td': this.input_to_json(block, 'td'),
        'hasMask': 'TRUE' == block.getFieldValue('hasMask'),
        'masksProperties': this.statements_to_json(block, 'masksProperties', false),
        'ef': this.statements_to_json(block, 'ef', false),
        'mb': 'TRUE' == block.getFieldValue('mb'),
        'sy': this.statements_to_json(block, 'sy', false),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'tg': this.input_to_json(block, 'tg'),
        'ty': Number(block.getFieldValue('ty')),
        't': this.input_to_json(block, 't')
    };
}
lottie_visual_layer(block)
{
    return {
        ...this.input_to_json(block, 'lottie_layer_common'),
        'cp': 'TRUE' == block.getFieldValue('cp'),
        'ks': this.input_to_json(block, 'ks'),
        'ao': 'TRUE' == block.getFieldValue('ao') ? 1 : 0,
        'tt': block.getFieldValue('tt') === '' ? undefined : Number(block.getFieldValue('tt')),
        'td': this.input_to_json(block, 'td'),
        'hasMask': 'TRUE' == block.getFieldValue('hasMask'),
        'masksProperties': this.statements_to_json(block, 'masksProperties', false),
        'ef': this.statements_to_json(block, 'ef', false),
        'mb': 'TRUE' == block.getFieldValue('mb'),
        'sy': this.statements_to_json(block, 'sy', false),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'tg': this.input_to_json(block, 'tg')
    };
}
lottie_ellipse(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'd': block.getFieldValue('d') === '' ? undefined : Number(block.getFieldValue('d')),
        'p': this.input_to_json(block, 'p'),
        's': this.input_to_json(block, 's')
    };
}
lottie_fill(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'o': this.input_to_json(block, 'o'),
        'c': this.input_to_json(block, 'c'),
        'r': block.getFieldValue('r') === '' ? undefined : Number(block.getFieldValue('r'))
    };
}
lottie_gradient_fill(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        's': this.input_to_json(block, 's'),
        'e': this.input_to_json(block, 'e'),
        't': block.getFieldValue('t') === '' ? undefined : Number(block.getFieldValue('t')),
        'h': this.input_to_json(block, 'h'),
        'a': this.input_to_json(block, 'a'),
        'g': this.input_to_json(block, 'g'),
        'o': this.input_to_json(block, 'o'),
        'r': block.getFieldValue('r') === '' ? undefined : Number(block.getFieldValue('r'))
    };
}
lottie_gradient_stroke(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'lc': block.getFieldValue('lc') === '' ? undefined : Number(block.getFieldValue('lc')),
        'lj': block.getFieldValue('lj') === '' ? undefined : Number(block.getFieldValue('lj')),
        'ml': this.input_to_json(block, 'ml'),
        'ml2': this.input_to_json(block, 'ml2'),
        'o': this.input_to_json(block, 'o'),
        'w': this.input_to_json(block, 'w'),
        'd': this.statements_to_json(block, 'd', false),
        's': this.input_to_json(block, 's'),
        'e': this.input_to_json(block, 'e'),
        't': block.getFieldValue('t') === '' ? undefined : Number(block.getFieldValue('t')),
        'h': this.input_to_json(block, 'h'),
        'a': this.input_to_json(block, 'a'),
        'g': this.input_to_json(block, 'g')
    };
}
lottie_group(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'np': this.input_to_json(block, 'np'),
        'it': this.statements_to_json(block, 'it', false),
        'cix': this.input_to_json(block, 'cix')
    };
}
lottie_no_style(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln')
    };
}
lottie_path(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'd': block.getFieldValue('d') === '' ? undefined : Number(block.getFieldValue('d')),
        'ks': this.input_to_json(block, 'ks')
    };
}
lottie_polystar(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'd': block.getFieldValue('d') === '' ? undefined : Number(block.getFieldValue('d')),
        'p': this.input_to_json(block, 'p'),
        'or': this.input_to_json(block, 'or'),
        'os': this.input_to_json(block, 'os'),
        'r': this.input_to_json(block, 'r'),
        'pt': this.input_to_json(block, 'pt'),
        'sy': block.getFieldValue('sy') === '' ? undefined : Number(block.getFieldValue('sy')),
        'ir': this.input_to_json(block, 'ir'),
        'is': this.input_to_json(block, 'is')
    };
}
lottie_pucker_bloat(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'a': this.input_to_json(block, 'a')
    };
}
lottie_rectangle(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'd': block.getFieldValue('d') === '' ? undefined : Number(block.getFieldValue('d')),
        'p': this.input_to_json(block, 'p'),
        's': this.input_to_json(block, 's'),
        'r': this.input_to_json(block, 'r')
    };
}
lottie_repeater(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'c': this.input_to_json(block, 'c'),
        'o': this.input_to_json(block, 'o'),
        'm': block.getFieldValue('m') === '' ? undefined : Number(block.getFieldValue('m')),
        'tr': this.input_to_json(block, 'tr')
    };
}
lottie_repeater_transform(block)
{
    return {
        'a': this.input_to_json(block, 'a'),
        's': this.input_to_json(block, 's'),
        'o': this.input_to_json(block, 'o'),
        'sk': this.input_to_json(block, 'sk'),
        'sa': this.input_to_json(block, 'sa'),
        'so': this.input_to_json(block, 'so'),
        'eo': this.input_to_json(block, 'eo')
    };
}
lottie_rounded_corners(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'r': this.input_to_json(block, 'r')
    };
}
lottie_shape_element(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        ...this.object_members_to_json(block, 'custom_attributes')
    };
}
lottie_stroke(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'lc': block.getFieldValue('lc') === '' ? undefined : Number(block.getFieldValue('lc')),
        'lj': block.getFieldValue('lj') === '' ? undefined : Number(block.getFieldValue('lj')),
        'ml': this.input_to_json(block, 'ml'),
        'ml2': this.input_to_json(block, 'ml2'),
        'o': this.input_to_json(block, 'o'),
        'w': this.input_to_json(block, 'w'),
        'd': this.statements_to_json(block, 'd', false),
        'c': this.input_to_json(block, 'c')
    };
}
lottie_stroke_dash(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'n': block.getFieldValue('n') === '' ? undefined : block.getFieldValue('n'),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_transform_shape(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'a': this.input_to_json(block, 'a'),
        'p': this.input_to_json(block, 'p'),
        's': this.input_to_json(block, 's'),
        'o': this.input_to_json(block, 'o'),
        'sk': this.input_to_json(block, 'sk'),
        'sa': this.input_to_json(block, 'sa')
    };
}
lottie_trim(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        's': this.input_to_json(block, 's'),
        'e': this.input_to_json(block, 'e'),
        'o': this.input_to_json(block, 'o'),
        'm': block.getFieldValue('m') === '' ? undefined : Number(block.getFieldValue('m'))
    };
}
lottie_zig_zag(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'hd': 'TRUE' == block.getFieldValue('hd'),
        'ty': block.getFieldValue('ty'),
        'bm': block.getFieldValue('bm') === '' ? undefined : Number(block.getFieldValue('bm')),
        'ix': this.input_to_json(block, 'ix'),
        'cl': this.input_to_json(block, 'cl'),
        'ln': this.input_to_json(block, 'ln'),
        'r': this.input_to_json(block, 'r'),
        's': this.input_to_json(block, 's'),
        'pt': this.input_to_json(block, 'pt')
    };
}
lottie_asset(block)
{
    return {
        'id': block.getFieldValue('id'),
        'nm': this.input_to_json(block, 'nm')
    };
}
lottie_data_source(block)
{
    return {
        'id': block.getFieldValue('id'),
        'nm': this.input_to_json(block, 'nm'),
        'u': this.input_to_json(block, 'u'),
        'p': block.getFieldValue('p'),
        'e': 'TRUE' == block.getFieldValue('e') ? 1 : 0,
        't': Number(block.getFieldValue('t'))
    };
}
lottie_file_asset(block)
{
    return {
        'id': block.getFieldValue('id'),
        'nm': this.input_to_json(block, 'nm'),
        'u': this.input_to_json(block, 'u'),
        'p': block.getFieldValue('p'),
        'e': 'TRUE' == block.getFieldValue('e') ? 1 : 0
    };
}
lottie_image(block)
{
    return {
        'id': block.getFieldValue('id'),
        'nm': this.input_to_json(block, 'nm'),
        'u': this.input_to_json(block, 'u'),
        'p': block.getFieldValue('p'),
        'e': 'TRUE' == block.getFieldValue('e') ? 1 : 0,
        'w': this.input_to_json(block, 'w'),
        'h': this.input_to_json(block, 'h'),
        't': block.getFieldValue('t')
    };
}
lottie_precomposition(block)
{
    return {
        'id': block.getFieldValue('id'),
        'nm': this.input_to_json(block, 'nm'),
        'layers': this.statements_to_json(block, 'layers', false),
        'fr': this.input_to_json(block, 'fr'),
        'xt': 'TRUE' == block.getFieldValue('xt') ? 1 : 0
    };
}
lottie_sound(block)
{
    return {
        'id': block.getFieldValue('id'),
        'nm': this.input_to_json(block, 'nm'),
        'u': this.input_to_json(block, 'u'),
        'p': block.getFieldValue('p'),
        'e': 'TRUE' == block.getFieldValue('e') ? 1 : 0
    };
}
lottie_displacement_map_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_drop_shadow_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0,
        ...this.object_members_to_json(block, 'custom_attributes')
    };
}
lottie_fill_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_gaussian_blur_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_matte3_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_mesh_warp_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_paint_over_transparent_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_pro_levels_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_puppet_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_radial_wipe_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_spherize_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_stroke_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_tint_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_tritone_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_wavy_effect(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ef': this.statements_to_json(block, 'ef', false),
        'np': this.input_to_json(block, 'np'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'en': 'TRUE' == block.getFieldValue('en') ? 1 : 0
    };
}
lottie_effect_value_angle(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_effect_value_checkbox(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_effect_value_color(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_effect_value_drop_down(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_effect_value_effect_value(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': this.input_to_json(block, 'ty')
    };
}
lottie_effect_value_ignored(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_effect_value_layer(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_effect_value_no_value(block)
{
    return {
        
    };
}
lottie_effect_value_point(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_effect_value_slider(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        'mn': this.input_to_json(block, 'mn'),
        'ix': this.input_to_json(block, 'ix'),
        'ty': Number(block.getFieldValue('ty')),
        'v': this.input_to_json(block, 'v')
    };
}
lottie_animated_text_document(block)
{
    return {
        'k': this.statements_to_json(block, 'k', false),
        'x': this.input_to_json(block, 'x')
    };
}
lottie_character_data(block)
{
    return {
        'ch': block.getFieldValue('ch'),
        'fFamily': block.getFieldValue('fFamily'),
        'size': Number(block.getFieldValue('size')),
        'style': block.getFieldValue('style'),
        'w': Number(block.getFieldValue('w'))
    };
}
lottie_character_precomp(block)
{
    return {
        'refId': block.getFieldValue('refId'),
        'ks': this.input_to_json(block, 'ks'),
        'ip': this.input_to_json(block, 'ip'),
        'op': this.input_to_json(block, 'op'),
        'sr': this.input_to_json(block, 'sr'),
        'st': this.input_to_json(block, 'st')
    };
}
lottie_character_shapes(block)
{
    return {
        'shapes': this.statements_to_json(block, 'shapes', false)
    };
}
lottie_font(block)
{
    return {
        'ascent': this.input_to_json(block, 'ascent'),
        'fFamily': block.getFieldValue('fFamily'),
        'fName': block.getFieldValue('fName'),
        'fStyle': block.getFieldValue('fStyle'),
        'fPath': this.input_to_json(block, 'fPath'),
        'fWeight': this.input_to_json(block, 'fWeight'),
        'origin': block.getFieldValue('origin') === '' ? undefined : Number(block.getFieldValue('origin')),
        'fClass': this.input_to_json(block, 'fClass')
    };
}
lottie_font_list(block)
{
    return {
        'list': this.statements_to_json(block, 'list', false)
    };
}
lottie_text_alignment_options(block)
{
    return {
        'a': this.input_to_json(block, 'a'),
        'g': block.getFieldValue('g') === '' ? undefined : Number(block.getFieldValue('g'))
    };
}
lottie_text_data(block)
{
    return {
        'a': this.statements_to_json(block, 'a', false),
        'd': this.input_to_json(block, 'd'),
        'm': this.input_to_json(block, 'm'),
        'p': this.input_to_json(block, 'p')
    };
}
lottie_text_document(block)
{
    return {
        'f': block.getFieldValue('f'),
        'fc': this.input_to_json(block, 'fc'),
        'sc': this.input_to_json(block, 'sc'),
        'sw': this.input_to_json(block, 'sw'),
        'of': 'TRUE' == block.getFieldValue('of'),
        's': Number(block.getFieldValue('s')),
        'lh': this.input_to_json(block, 'lh'),
        'sz': this.input_to_json(block, 'sz'),
        'ps': this.input_to_json(block, 'ps'),
        't': block.getFieldValue('t'),
        'j': block.getFieldValue('j') === '' ? undefined : Number(block.getFieldValue('j')),
        'ca': block.getFieldValue('ca') === '' ? undefined : Number(block.getFieldValue('ca')),
        'tr': this.input_to_json(block, 'tr'),
        'ls': this.input_to_json(block, 'ls')
    };
}
lottie_text_document_keyframe(block)
{
    return {
        's': this.input_to_json(block, 's'),
        't': Number(block.getFieldValue('t'))
    };
}
lottie_text_follow_path(block)
{
    return {
        'm': this.input_to_json(block, 'm'),
        'f': this.input_to_json(block, 'f'),
        'l': this.input_to_json(block, 'l'),
        'r': this.input_to_json(block, 'r'),
        'a': this.input_to_json(block, 'a'),
        'p': this.input_to_json(block, 'p')
    };
}
lottie_text_range(block)
{
    return {
        'nm': this.input_to_json(block, 'nm'),
        's': this.input_to_json(block, 's'),
        'a': this.input_to_json(block, 'a')
    };
}
lottie_text_range_selector(block)
{
    return {
        't': 'TRUE' == block.getFieldValue('t') ? 1 : 0,
        'xe': this.input_to_json(block, 'xe'),
        'ne': this.input_to_json(block, 'ne'),
        'a': this.input_to_json(block, 'a'),
        'b': block.getFieldValue('b') === '' ? undefined : Number(block.getFieldValue('b')),
        'rn': 'TRUE' == block.getFieldValue('rn') ? 1 : 0,
        'sh': block.getFieldValue('sh') === '' ? undefined : Number(block.getFieldValue('sh')),
        'o': this.input_to_json(block, 'o'),
        'r': block.getFieldValue('r') === '' ? undefined : Number(block.getFieldValue('r')),
        'sm': this.input_to_json(block, 'sm'),
        's': this.input_to_json(block, 's'),
        'e': this.input_to_json(block, 'e')
    };
}
lottie_text_style(block)
{
    return {
        'a': this.input_to_json(block, 'a'),
        's': this.input_to_json(block, 's'),
        'o': this.input_to_json(block, 'o'),
        'sk': this.input_to_json(block, 'sk'),
        'sa': this.input_to_json(block, 'sa'),
        'sw': this.input_to_json(block, 'sw'),
        'sc': this.input_to_json(block, 'sc'),
        'sh': this.input_to_json(block, 'sh'),
        'ss': this.input_to_json(block, 'ss'),
        'sb': this.input_to_json(block, 'sb'),
        'so': this.input_to_json(block, 'so'),
        'fc': this.input_to_json(block, 'fc'),
        'fh': this.input_to_json(block, 'fh'),
        'fs': this.input_to_json(block, 'fs'),
        'fb': this.input_to_json(block, 'fb'),
        'fo': this.input_to_json(block, 'fo'),
        't': this.input_to_json(block, 't'),
        'bl': this.input_to_json(block, 'bl'),
        'ls': this.input_to_json(block, 'ls')
    };
}
}
class GeneratedParser {
lottie_animation(parent, json)
{
    var block = this.create_block(parent, 'lottie_animation');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.v !== undefined ) this.create_value_block(this.value(block, "v"), json.v, "");
    if ( json.fr !== undefined ) this.set_field(block, "fr", json.fr.toString());
    if ( json.ip !== undefined ) this.set_field(block, "ip", json.ip.toString());
    if ( json.op !== undefined ) this.set_field(block, "op", json.op.toString());
    if ( json.w !== undefined ) this.set_field(block, "w", json.w.toString());
    if ( json.h !== undefined ) this.set_field(block, "h", json.h.toString());
    if ( json.ddd !== undefined ) this.set_field(block, "ddd", json.ddd ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.assets) ) this.statements_from_json(block, 'assets', json.assets, 'assets');
    if ( Array.isArray(json.comps) ) this.statements_from_json(block, 'comps', json.comps, 'lottie_precomposition');
    if ( json.fonts !== undefined ) this.lottie_font_list(this.value(block, "fonts"), json.fonts);
    if ( Array.isArray(json.chars) ) this.statements_from_json(block, 'chars', json.chars, 'lottie_character_data');
    if ( json.meta !== undefined ) this.lottie_metadata(this.value(block, "meta"), json.meta);
    if ( json.metadata !== undefined ) this.lottie_user_metadata(this.value(block, "metadata"), json.metadata);
    if ( Array.isArray(json.markers) ) this.statements_from_json(block, 'markers', json.markers, '');
    if ( json.mb !== undefined ) this.lottie_motion_blur(this.value(block, "mb"), json.mb);
    if ( Array.isArray(json.layers) ) this.statements_from_json(block, 'layers', json.layers, 'layers')
    return block;
}
lottie_metadata(parent, json)
{
    var block = this.create_block(parent, 'lottie_metadata');
    if ( json.a !== undefined ) this.create_value_block(this.value(block, "a"), json.a, "");
    if ( json.d !== undefined ) this.create_value_block(this.value(block, "d"), json.d, "");
    if ( json.tc !== undefined ) this.create_value_block(this.value(block, "tc"), json.tc, "");
    if ( json.g !== undefined ) this.create_value_block(this.value(block, "g"), json.g, "")
    return block;
}
lottie_motion_blur(parent, json)
{
    var block = this.create_block(parent, 'lottie_motion_blur');
    if ( json.sa !== undefined ) this.create_value_block(this.value(block, "sa"), json.sa, "");
    if ( json.sp !== undefined ) this.create_value_block(this.value(block, "sp"), json.sp, "");
    if ( json.spf !== undefined ) this.create_value_block(this.value(block, "spf"), json.spf, "");
    if ( json.asl !== undefined ) this.create_value_block(this.value(block, "asl"), json.asl, "")
    return block;
}
lottie_user_metadata(parent, json)
{
    var block = this.create_block(parent, 'lottie_user_metadata');
    if ( json.filename !== undefined ) this.create_value_block(this.value(block, "filename"), json.filename, "");
    if ( json.customProps !== undefined ) this.create_value_block(this.value(block, "customProps"), json.customProps, "")
    return block;
}
lottie_layer_common(parent, json)
{
    var block = this.create_block(parent, 'lottie_layer_common');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ddd !== undefined ) this.set_field(block, "ddd", json.ddd ? 'TRUE' : 'FALSE');
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ind !== undefined ) this.create_value_block(this.value(block, "ind"), json.ind, "");
    if ( json.parent !== undefined ) this.create_value_block(this.value(block, "parent"), json.parent, "");
    if ( json.sr !== undefined ) this.create_value_block(this.value(block, "sr"), json.sr, "");
    if ( json.ip !== undefined ) this.set_field(block, "ip", json.ip.toString());
    if ( json.op !== undefined ) this.set_field(block, "op", json.op.toString());
    if ( json.st !== undefined ) this.set_field(block, "st", json.st.toString())
    return block;
}
lottie_audio_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_audio_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.au !== undefined ) this.lottie_audio_settings(this.value(block, "au"), json.au);
    if ( json.refId !== undefined ) this.create_value_block(this.value(block, "refId"), json.refId, "")
    return block;
}
lottie_audio_settings(parent, json)
{
    var block = this.create_block(parent, 'lottie_audio_settings');
    this.create_property_block(block, json, "lv", "vector")
    return block;
}
lottie_camera_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_camera_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    this.create_property_block(block, json, "pe", "")
    return block;
}
lottie_data_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_data_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.refId !== undefined ) this.create_value_block(this.value(block, "refId"), json.refId, "")
    return block;
}
lottie_image_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_image_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.cp !== undefined ) this.set_field(block, "cp", json.cp ? 'TRUE' : 'FALSE');
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    if ( json.ao !== undefined ) this.set_field(block, "ao", json.ao ? 'TRUE' : 'FALSE');
    if ( json.tt !== undefined ) this.set_field(block, "tt", json.tt.toString());
    if ( json.td !== undefined ) this.create_value_block(this.value(block, "td"), json.td, "");
    if ( json.hasMask !== undefined ) this.set_field(block, "hasMask", json.hasMask ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.masksProperties) ) this.statements_from_json(block, 'masksProperties', json.masksProperties, '');
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, 'effects');
    if ( json.mb !== undefined ) this.set_field(block, "mb", json.mb ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.sy) ) this.statements_from_json(block, 'sy', json.sy, 'styles');
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.tg !== undefined ) this.create_value_block(this.value(block, "tg"), json.tg, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.refId !== undefined ) this.set_field(block, "refId", json.refId)
    return block;
}
lottie_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    this.object_members_from_json(block, json, "custom_attributes")
    return block;
}
lottie_null_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_null_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.cp !== undefined ) this.set_field(block, "cp", json.cp ? 'TRUE' : 'FALSE');
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    if ( json.ao !== undefined ) this.set_field(block, "ao", json.ao ? 'TRUE' : 'FALSE');
    if ( json.tt !== undefined ) this.set_field(block, "tt", json.tt.toString());
    if ( json.td !== undefined ) this.create_value_block(this.value(block, "td"), json.td, "");
    if ( json.hasMask !== undefined ) this.set_field(block, "hasMask", json.hasMask ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.masksProperties) ) this.statements_from_json(block, 'masksProperties', json.masksProperties, '');
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, 'effects');
    if ( json.mb !== undefined ) this.set_field(block, "mb", json.mb ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.sy) ) this.statements_from_json(block, 'sy', json.sy, 'styles');
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.tg !== undefined ) this.create_value_block(this.value(block, "tg"), json.tg, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString())
    return block;
}
lottie_precomposition_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_precomposition_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.cp !== undefined ) this.set_field(block, "cp", json.cp ? 'TRUE' : 'FALSE');
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    if ( json.ao !== undefined ) this.set_field(block, "ao", json.ao ? 'TRUE' : 'FALSE');
    if ( json.tt !== undefined ) this.set_field(block, "tt", json.tt.toString());
    if ( json.td !== undefined ) this.create_value_block(this.value(block, "td"), json.td, "");
    if ( json.hasMask !== undefined ) this.set_field(block, "hasMask", json.hasMask ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.masksProperties) ) this.statements_from_json(block, 'masksProperties', json.masksProperties, '');
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, 'effects');
    if ( json.mb !== undefined ) this.set_field(block, "mb", json.mb ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.sy) ) this.statements_from_json(block, 'sy', json.sy, 'styles');
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.tg !== undefined ) this.create_value_block(this.value(block, "tg"), json.tg, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.refId !== undefined ) this.set_field(block, "refId", json.refId);
    if ( json.w !== undefined ) this.set_field(block, "w", json.w.toString());
    if ( json.h !== undefined ) this.set_field(block, "h", json.h.toString());
    this.create_property_block(block, json, "tm", "")
    return block;
}
lottie_shape_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_shape_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.cp !== undefined ) this.set_field(block, "cp", json.cp ? 'TRUE' : 'FALSE');
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    if ( json.ao !== undefined ) this.set_field(block, "ao", json.ao ? 'TRUE' : 'FALSE');
    if ( json.tt !== undefined ) this.set_field(block, "tt", json.tt.toString());
    if ( json.td !== undefined ) this.create_value_block(this.value(block, "td"), json.td, "");
    if ( json.hasMask !== undefined ) this.set_field(block, "hasMask", json.hasMask ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.masksProperties) ) this.statements_from_json(block, 'masksProperties', json.masksProperties, '');
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, 'effects');
    if ( json.mb !== undefined ) this.set_field(block, "mb", json.mb ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.sy) ) this.statements_from_json(block, 'sy', json.sy, 'styles');
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.tg !== undefined ) this.create_value_block(this.value(block, "tg"), json.tg, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( Array.isArray(json.shapes) ) this.statements_from_json(block, 'shapes', json.shapes, 'shapes')
    return block;
}
lottie_solid_color_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_solid_color_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.cp !== undefined ) this.set_field(block, "cp", json.cp ? 'TRUE' : 'FALSE');
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    if ( json.ao !== undefined ) this.set_field(block, "ao", json.ao ? 'TRUE' : 'FALSE');
    if ( json.tt !== undefined ) this.set_field(block, "tt", json.tt.toString());
    if ( json.td !== undefined ) this.create_value_block(this.value(block, "td"), json.td, "");
    if ( json.hasMask !== undefined ) this.set_field(block, "hasMask", json.hasMask ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.masksProperties) ) this.statements_from_json(block, 'masksProperties', json.masksProperties, '');
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, 'effects');
    if ( json.mb !== undefined ) this.set_field(block, "mb", json.mb ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.sy) ) this.statements_from_json(block, 'sy', json.sy, 'styles');
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.tg !== undefined ) this.create_value_block(this.value(block, "tg"), json.tg, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.sc !== undefined ) this.set_field(block, "sc", json.sc);
    if ( json.sh !== undefined ) this.set_field(block, "sh", json.sh.toString());
    if ( json.sw !== undefined ) this.set_field(block, "sw", json.sw.toString())
    return block;
}
lottie_text_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.cp !== undefined ) this.set_field(block, "cp", json.cp ? 'TRUE' : 'FALSE');
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    if ( json.ao !== undefined ) this.set_field(block, "ao", json.ao ? 'TRUE' : 'FALSE');
    if ( json.tt !== undefined ) this.set_field(block, "tt", json.tt.toString());
    if ( json.td !== undefined ) this.create_value_block(this.value(block, "td"), json.td, "");
    if ( json.hasMask !== undefined ) this.set_field(block, "hasMask", json.hasMask ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.masksProperties) ) this.statements_from_json(block, 'masksProperties', json.masksProperties, '');
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, 'effects');
    if ( json.mb !== undefined ) this.set_field(block, "mb", json.mb ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.sy) ) this.statements_from_json(block, 'sy', json.sy, 'styles');
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.tg !== undefined ) this.create_value_block(this.value(block, "tg"), json.tg, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.t !== undefined ) this.lottie_text_data(this.value(block, "t"), json.t)
    return block;
}
lottie_visual_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_visual_layer');
    this.json_to_block(this.value(block, 'lottie_layer_common'), json, 'lottie_layer_common', BlocklyJsonParser.Output);
    if ( json.cp !== undefined ) this.set_field(block, "cp", json.cp ? 'TRUE' : 'FALSE');
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    if ( json.ao !== undefined ) this.set_field(block, "ao", json.ao ? 'TRUE' : 'FALSE');
    if ( json.tt !== undefined ) this.set_field(block, "tt", json.tt.toString());
    if ( json.td !== undefined ) this.create_value_block(this.value(block, "td"), json.td, "");
    if ( json.hasMask !== undefined ) this.set_field(block, "hasMask", json.hasMask ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.masksProperties) ) this.statements_from_json(block, 'masksProperties', json.masksProperties, '');
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, 'effects');
    if ( json.mb !== undefined ) this.set_field(block, "mb", json.mb ? 'TRUE' : 'FALSE');
    if ( Array.isArray(json.sy) ) this.statements_from_json(block, 'sy', json.sy, 'styles');
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.tg !== undefined ) this.create_value_block(this.value(block, "tg"), json.tg, "")
    return block;
}
lottie_ellipse(parent, json)
{
    var block = this.create_block(parent, 'lottie_ellipse');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.d !== undefined ) this.set_field(block, "d", json.d.toString());
    this.maybe_split_property(block, json, "p");
    this.create_property_block(block, json, "s", "vector")
    return block;
}
lottie_fill(parent, json)
{
    var block = this.create_block(parent, 'lottie_fill');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.create_property_block(block, json, "o", "");
    this.create_property_block(block, json, "c", "color");
    if ( json.r !== undefined ) this.set_field(block, "r", json.r.toString())
    return block;
}
lottie_gradient_fill(parent, json)
{
    var block = this.create_block(parent, 'lottie_gradient_fill');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.create_property_block(block, json, "s", "vector");
    this.create_property_block(block, json, "e", "vector");
    if ( json.t !== undefined ) this.set_field(block, "t", json.t.toString());
    this.create_property_block(block, json, "h", "");
    this.create_property_block(block, json, "a", "");
    if ( json.g !== undefined ) this.lottie_gradient_colors(this.value(block, "g"), json.g);
    this.create_property_block(block, json, "o", "");
    if ( json.r !== undefined ) this.set_field(block, "r", json.r.toString())
    return block;
}
lottie_gradient_stroke(parent, json)
{
    var block = this.create_block(parent, 'lottie_gradient_stroke');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.lc !== undefined ) this.set_field(block, "lc", json.lc.toString());
    if ( json.lj !== undefined ) this.set_field(block, "lj", json.lj.toString());
    if ( json.ml !== undefined ) this.create_value_block(this.value(block, "ml"), json.ml, "");
    this.create_property_block(block, json, "ml2", "");
    this.create_property_block(block, json, "o", "");
    this.create_property_block(block, json, "w", "");
    if ( Array.isArray(json.d) ) this.statements_from_json(block, 'd', json.d, 'lottie_stroke_dash');
    this.create_property_block(block, json, "s", "vector");
    this.create_property_block(block, json, "e", "vector");
    if ( json.t !== undefined ) this.set_field(block, "t", json.t.toString());
    this.create_property_block(block, json, "h", "");
    this.create_property_block(block, json, "a", "");
    if ( json.g !== undefined ) this.lottie_gradient_colors(this.value(block, "g"), json.g)
    return block;
}
lottie_group(parent, json)
{
    var block = this.create_block(parent, 'lottie_group');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( Array.isArray(json.it) ) this.statements_from_json(block, 'it', json.it, 'shapes');
    if ( json.cix !== undefined ) this.create_value_block(this.value(block, "cix"), json.cix, "")
    return block;
}
lottie_no_style(parent, json)
{
    var block = this.create_block(parent, 'lottie_no_style');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "")
    return block;
}
lottie_path(parent, json)
{
    var block = this.create_block(parent, 'lottie_path');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.d !== undefined ) this.set_field(block, "d", json.d.toString());
    this.create_property_block(block, json, "ks", "")
    return block;
}
lottie_polystar(parent, json)
{
    var block = this.create_block(parent, 'lottie_polystar');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.d !== undefined ) this.set_field(block, "d", json.d.toString());
    this.maybe_split_property(block, json, "p");
    this.create_property_block(block, json, "or", "");
    this.create_property_block(block, json, "os", "");
    this.create_property_block(block, json, "r", "angle");
    this.create_property_block(block, json, "pt", "");
    if ( json.sy !== undefined ) this.set_field(block, "sy", json.sy.toString());
    this.create_property_block(block, json, "ir", "");
    this.create_property_block(block, json, "is", "")
    return block;
}
lottie_pucker_bloat(parent, json)
{
    var block = this.create_block(parent, 'lottie_pucker_bloat');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.create_property_block(block, json, "a", "")
    return block;
}
lottie_rectangle(parent, json)
{
    var block = this.create_block(parent, 'lottie_rectangle');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.d !== undefined ) this.set_field(block, "d", json.d.toString());
    this.maybe_split_property(block, json, "p");
    this.create_property_block(block, json, "s", "vector");
    this.create_property_block(block, json, "r", "")
    return block;
}
lottie_repeater(parent, json)
{
    var block = this.create_block(parent, 'lottie_repeater');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.create_property_block(block, json, "c", "");
    this.create_property_block(block, json, "o", "");
    if ( json.m !== undefined ) this.set_field(block, "m", json.m.toString());
    if ( json.tr !== undefined ) this.lottie_repeater_transform(this.value(block, "tr"), json.tr)
    return block;
}
lottie_repeater_transform(parent, json)
{
    var block = this.create_block(parent, 'lottie_repeater_transform');
    this.create_property_block(block, json, "a", "vector");
    this.create_property_block(block, json, "s", "vector");
    this.create_property_block(block, json, "o", "");
    this.create_property_block(block, json, "sk", "");
    this.create_property_block(block, json, "sa", "");
    this.create_property_block(block, json, "so", "");
    this.create_property_block(block, json, "eo", "")
    return block;
}
lottie_rounded_corners(parent, json)
{
    var block = this.create_block(parent, 'lottie_rounded_corners');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.create_property_block(block, json, "r", "")
    return block;
}
lottie_shape_element(parent, json)
{
    var block = this.create_block(parent, 'lottie_shape_element');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.object_members_from_json(block, json, "custom_attributes")
    return block;
}
lottie_stroke(parent, json)
{
    var block = this.create_block(parent, 'lottie_stroke');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    if ( json.lc !== undefined ) this.set_field(block, "lc", json.lc.toString());
    if ( json.lj !== undefined ) this.set_field(block, "lj", json.lj.toString());
    if ( json.ml !== undefined ) this.create_value_block(this.value(block, "ml"), json.ml, "");
    this.create_property_block(block, json, "ml2", "");
    this.create_property_block(block, json, "o", "");
    this.create_property_block(block, json, "w", "");
    if ( Array.isArray(json.d) ) this.statements_from_json(block, 'd', json.d, 'lottie_stroke_dash');
    this.create_property_block(block, json, "c", "color")
    return block;
}
lottie_stroke_dash(parent, json)
{
    var block = this.create_block(parent, 'lottie_stroke_dash');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.n !== undefined ) this.set_field(block, "n", json.n);
    this.create_property_block(block, json, "v", "")
    return block;
}
lottie_transform_shape(parent, json)
{
    var block = this.create_block(parent, 'lottie_transform_shape');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.create_property_block(block, json, "a", "vector");
    this.maybe_split_property(block, json, "p");
    this.create_property_block(block, json, "s", "vector");
    this.create_property_block(block, json, "o", "");
    this.create_property_block(block, json, "sk", "");
    this.create_property_block(block, json, "sa", "")
    return block;
}
lottie_trim(parent, json)
{
    var block = this.create_block(parent, 'lottie_trim');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.create_property_block(block, json, "s", "");
    this.create_property_block(block, json, "e", "");
    this.create_property_block(block, json, "o", "");
    if ( json.m !== undefined ) this.set_field(block, "m", json.m.toString())
    return block;
}
lottie_zig_zag(parent, json)
{
    var block = this.create_block(parent, 'lottie_zig_zag');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.hd !== undefined ) this.set_field(block, "hd", json.hd ? 'TRUE' : 'FALSE');
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty);
    if ( json.bm !== undefined ) this.set_field(block, "bm", json.bm.toString());
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.cl !== undefined ) this.create_value_block(this.value(block, "cl"), json.cl, "");
    if ( json.ln !== undefined ) this.create_value_block(this.value(block, "ln"), json.ln, "");
    this.create_property_block(block, json, "r", "");
    this.create_property_block(block, json, "s", "");
    this.create_property_block(block, json, "pt", "")
    return block;
}
lottie_asset(parent, json)
{
    var block = this.create_block(parent, 'lottie_asset');
    if ( json.id !== undefined ) this.set_field(block, "id", json.id);
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "")
    return block;
}
lottie_data_source(parent, json)
{
    var block = this.create_block(parent, 'lottie_data_source');
    if ( json.id !== undefined ) this.set_field(block, "id", json.id);
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.u !== undefined ) this.create_value_block(this.value(block, "u"), json.u, "");
    if ( json.p !== undefined ) this.set_field(block, "p", json.p);
    if ( json.e !== undefined ) this.set_field(block, "e", json.e ? 'TRUE' : 'FALSE');
    if ( json.t !== undefined ) this.set_field(block, "t", json.t.toString())
    return block;
}
lottie_file_asset(parent, json)
{
    var block = this.create_block(parent, 'lottie_file_asset');
    if ( json.id !== undefined ) this.set_field(block, "id", json.id);
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.u !== undefined ) this.create_value_block(this.value(block, "u"), json.u, "");
    if ( json.p !== undefined ) this.set_field(block, "p", json.p);
    if ( json.e !== undefined ) this.set_field(block, "e", json.e ? 'TRUE' : 'FALSE')
    return block;
}
lottie_image(parent, json)
{
    var block = this.create_block(parent, 'lottie_image');
    if ( json.id !== undefined ) this.set_field(block, "id", json.id);
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.u !== undefined ) this.create_value_block(this.value(block, "u"), json.u, "");
    if ( json.p !== undefined ) this.set_field(block, "p", json.p);
    if ( json.e !== undefined ) this.set_field(block, "e", json.e ? 'TRUE' : 'FALSE');
    if ( json.w !== undefined ) this.create_value_block(this.value(block, "w"), json.w, "");
    if ( json.h !== undefined ) this.create_value_block(this.value(block, "h"), json.h, "");
    if ( json.t !== undefined ) this.set_field(block, "t", json.t)
    return block;
}
lottie_precomposition(parent, json)
{
    var block = this.create_block(parent, 'lottie_precomposition');
    if ( json.id !== undefined ) this.set_field(block, "id", json.id);
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( Array.isArray(json.layers) ) this.statements_from_json(block, 'layers', json.layers, 'layers');
    if ( json.fr !== undefined ) this.create_value_block(this.value(block, "fr"), json.fr, "");
    if ( json.xt !== undefined ) this.set_field(block, "xt", json.xt ? 'TRUE' : 'FALSE')
    return block;
}
lottie_sound(parent, json)
{
    var block = this.create_block(parent, 'lottie_sound');
    if ( json.id !== undefined ) this.set_field(block, "id", json.id);
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.u !== undefined ) this.create_value_block(this.value(block, "u"), json.u, "");
    if ( json.p !== undefined ) this.set_field(block, "p", json.p);
    if ( json.e !== undefined ) this.set_field(block, "e", json.e ? 'TRUE' : 'FALSE')
    return block;
}
lottie_displacement_map_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_displacement_map_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_drop_shadow_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_drop_shadow_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, 'effect_values');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE');
    this.object_members_from_json(block, json, "custom_attributes")
    return block;
}
lottie_fill_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_fill_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_gaussian_blur_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_gaussian_blur_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_matte3_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_matte3_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_mesh_warp_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_mesh_warp_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_paint_over_transparent_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_paint_over_transparent_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_pro_levels_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_pro_levels_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_puppet_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_puppet_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_radial_wipe_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_radial_wipe_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_spherize_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_spherize_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_stroke_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_stroke_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_tint_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_tint_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_tritone_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_tritone_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_wavy_effect(parent, json)
{
    var block = this.create_block(parent, 'lottie_wavy_effect');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( Array.isArray(json.ef) ) this.statements_from_json(block, 'ef', json.ef, '');
    if ( json.np !== undefined ) this.create_value_block(this.value(block, "np"), json.np, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.en !== undefined ) this.set_field(block, "en", json.en ? 'TRUE' : 'FALSE')
    return block;
}
lottie_effect_value_angle(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_angle');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    this.create_property_block(block, json, "v", "")
    return block;
}
lottie_effect_value_checkbox(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_checkbox');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    this.create_property_block(block, json, "v", "")
    return block;
}
lottie_effect_value_color(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_color');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    this.create_property_block(block, json, "v", "color")
    return block;
}
lottie_effect_value_drop_down(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_drop_down');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    this.create_property_block(block, json, "v", "")
    return block;
}
lottie_effect_value_effect_value(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_effect_value');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.create_value_block(this.value(block, "ty"), json.ty, "")
    return block;
}
lottie_effect_value_ignored(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_ignored');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    if ( json.v !== undefined ) this.create_value_block(this.value(block, "v"), json.v, "")
    return block;
}
lottie_effect_value_layer(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_layer');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    this.create_property_block(block, json, "v", "")
    return block;
}
lottie_effect_value_no_value(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_no_value');
    
    return block;
}
lottie_effect_value_point(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_point');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    this.create_property_block(block, json, "v", "vector")
    return block;
}
lottie_effect_value_slider(parent, json)
{
    var block = this.create_block(parent, 'lottie_effect_value_slider');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.mn !== undefined ) this.create_value_block(this.value(block, "mn"), json.mn, "");
    if ( json.ix !== undefined ) this.create_value_block(this.value(block, "ix"), json.ix, "");
    if ( json.ty !== undefined ) this.set_field(block, "ty", json.ty.toString());
    this.create_property_block(block, json, "v", "")
    return block;
}
lottie_animated_text_document(parent, json)
{
    var block = this.create_block(parent, 'lottie_animated_text_document');
    if ( Array.isArray(json.k) ) this.statements_from_json(block, 'k', json.k, 'lottie_text_document_keyframe');
    if ( json.x !== undefined ) this.create_value_block(this.value(block, "x"), json.x, "")
    return block;
}
lottie_character_data(parent, json)
{
    var block = this.create_block(parent, 'lottie_character_data');
    if ( json.ch !== undefined ) this.set_field(block, "ch", json.ch);
    if ( json.fFamily !== undefined ) this.set_field(block, "fFamily", json.fFamily);
    if ( json.size !== undefined ) this.set_field(block, "size", json.size.toString());
    if ( json.style !== undefined ) this.set_field(block, "style", json.style);
    if ( json.w !== undefined ) this.set_field(block, "w", json.w.toString())
    return block;
}
lottie_character_precomp(parent, json)
{
    var block = this.create_block(parent, 'lottie_character_precomp');
    if ( json.refId !== undefined ) this.set_field(block, "refId", json.refId);
    if ( json.ks !== undefined ) this.lottie_transform(this.value(block, "ks"), json.ks);
    if ( json.ip !== undefined ) this.create_value_block(this.value(block, "ip"), json.ip, "");
    if ( json.op !== undefined ) this.create_value_block(this.value(block, "op"), json.op, "");
    if ( json.sr !== undefined ) this.create_value_block(this.value(block, "sr"), json.sr, "");
    if ( json.st !== undefined ) this.create_value_block(this.value(block, "st"), json.st, "")
    return block;
}
lottie_character_shapes(parent, json)
{
    var block = this.create_block(parent, 'lottie_character_shapes');
    if ( Array.isArray(json.shapes) ) this.statements_from_json(block, 'shapes', json.shapes, 'shapes')
    return block;
}
lottie_font(parent, json)
{
    var block = this.create_block(parent, 'lottie_font');
    if ( json.ascent !== undefined ) this.create_value_block(this.value(block, "ascent"), json.ascent, "");
    if ( json.fFamily !== undefined ) this.set_field(block, "fFamily", json.fFamily);
    if ( json.fName !== undefined ) this.set_field(block, "fName", json.fName);
    if ( json.fStyle !== undefined ) this.set_field(block, "fStyle", json.fStyle);
    if ( json.fPath !== undefined ) this.create_value_block(this.value(block, "fPath"), json.fPath, "");
    if ( json.fWeight !== undefined ) this.create_value_block(this.value(block, "fWeight"), json.fWeight, "");
    if ( json.origin !== undefined ) this.set_field(block, "origin", json.origin.toString());
    if ( json.fClass !== undefined ) this.create_value_block(this.value(block, "fClass"), json.fClass, "")
    return block;
}
lottie_font_list(parent, json)
{
    var block = this.create_block(parent, 'lottie_font_list');
    if ( Array.isArray(json.list) ) this.statements_from_json(block, 'list', json.list, 'lottie_font')
    return block;
}
lottie_text_alignment_options(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_alignment_options');
    this.create_property_block(block, json, "a", "vector");
    if ( json.g !== undefined ) this.set_field(block, "g", json.g.toString())
    return block;
}
lottie_text_data(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_data');
    if ( Array.isArray(json.a) ) this.statements_from_json(block, 'a', json.a, 'lottie_text_range');
    if ( json.d !== undefined ) this.lottie_animated_text_document(this.value(block, "d"), json.d);
    if ( json.m !== undefined ) this.lottie_text_alignment_options(this.value(block, "m"), json.m);
    this.maybe_split_property(block, json, "p")
    return block;
}
lottie_text_document(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_document');
    if ( json.f !== undefined ) this.set_field(block, "f", json.f);
    if ( json.fc !== undefined ) this.create_value_block(this.value(block, "fc"), json.fc, "");
    if ( json.sc !== undefined ) this.create_value_block(this.value(block, "sc"), json.sc, "");
    if ( json.sw !== undefined ) this.create_value_block(this.value(block, "sw"), json.sw, "");
    if ( json.of !== undefined ) this.set_field(block, "of", json.of ? 'TRUE' : 'FALSE');
    if ( json.s !== undefined ) this.set_field(block, "s", json.s.toString());
    if ( json.lh !== undefined ) this.create_value_block(this.value(block, "lh"), json.lh, "");
    if ( json.sz !== undefined ) this.create_value_block(this.value(block, "sz"), json.sz, "");
    if ( json.ps !== undefined ) this.create_value_block(this.value(block, "ps"), json.ps, "");
    if ( json.t !== undefined ) this.set_field(block, "t", json.t);
    if ( json.j !== undefined ) this.set_field(block, "j", json.j.toString());
    if ( json.ca !== undefined ) this.set_field(block, "ca", json.ca.toString());
    if ( json.tr !== undefined ) this.create_value_block(this.value(block, "tr"), json.tr, "");
    if ( json.ls !== undefined ) this.create_value_block(this.value(block, "ls"), json.ls, "")
    return block;
}
lottie_text_document_keyframe(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_document_keyframe');
    if ( json.s !== undefined ) this.lottie_text_document(this.value(block, "s"), json.s);
    if ( json.t !== undefined ) this.set_field(block, "t", json.t.toString())
    return block;
}
lottie_text_follow_path(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_follow_path');
    if ( json.m !== undefined ) this.create_value_block(this.value(block, "m"), json.m, "");
    this.create_property_block(block, json, "f", "");
    this.create_property_block(block, json, "l", "");
    this.create_property_block(block, json, "r", "");
    this.create_property_block(block, json, "a", "");
    this.maybe_split_property(block, json, "p")
    return block;
}
lottie_text_range(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_range');
    if ( json.nm !== undefined ) this.create_value_block(this.value(block, "nm"), json.nm, "");
    if ( json.s !== undefined ) this.lottie_text_range_selector(this.value(block, "s"), json.s);
    if ( json.a !== undefined ) this.lottie_text_style(this.value(block, "a"), json.a)
    return block;
}
lottie_text_range_selector(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_range_selector');
    if ( json.t !== undefined ) this.set_field(block, "t", json.t ? 'TRUE' : 'FALSE');
    this.create_property_block(block, json, "xe", "");
    this.create_property_block(block, json, "ne", "");
    this.create_property_block(block, json, "a", "");
    if ( json.b !== undefined ) this.set_field(block, "b", json.b.toString());
    if ( json.rn !== undefined ) this.set_field(block, "rn", json.rn ? 'TRUE' : 'FALSE');
    if ( json.sh !== undefined ) this.set_field(block, "sh", json.sh.toString());
    this.create_property_block(block, json, "o", "");
    if ( json.r !== undefined ) this.set_field(block, "r", json.r.toString());
    this.create_property_block(block, json, "sm", "");
    this.create_property_block(block, json, "s", "");
    this.create_property_block(block, json, "e", "")
    return block;
}
lottie_text_style(parent, json)
{
    var block = this.create_block(parent, 'lottie_text_style');
    this.create_property_block(block, json, "a", "vector");
    this.create_property_block(block, json, "s", "vector");
    this.create_property_block(block, json, "o", "");
    this.create_property_block(block, json, "sk", "");
    this.create_property_block(block, json, "sa", "");
    this.create_property_block(block, json, "sw", "");
    this.create_property_block(block, json, "sc", "color");
    this.create_property_block(block, json, "sh", "");
    this.create_property_block(block, json, "ss", "");
    this.create_property_block(block, json, "sb", "");
    this.create_property_block(block, json, "so", "");
    this.create_property_block(block, json, "fc", "color");
    this.create_property_block(block, json, "fh", "");
    this.create_property_block(block, json, "fs", "");
    this.create_property_block(block, json, "fb", "");
    this.create_property_block(block, json, "fo", "");
    this.create_property_block(block, json, "t", "");
    this.create_property_block(block, json, "bl", "");
    this.create_property_block(block, json, "ls", "")
    return block;
}
get_type_for_layers(json){
    switch ( json.ty ) {
        case 0: return 'lottie_precomposition_layer';
        case 1: return 'lottie_solid_color_layer';
        case 2: return 'lottie_image_layer';
        case 3: return 'lottie_null_layer';
        case 4: return 'lottie_shape_layer';
        case 5: return 'lottie_text_layer';
        case 6: return 'lottie_audio_layer';
        case 13: return 'lottie_camera_layer';
        case 15: return 'lottie_data_layer';
        default: return '';
    }
}
get_type_for_shapes(json){
    switch ( json.ty ) {
        case 'el': return 'lottie_ellipse';
        case 'fl': return 'lottie_fill';
        case 'gf': return 'lottie_gradient_fill';
        case 'gr': return 'lottie_group';
        case 'gs': return 'lottie_gradient_stroke';
        case 'no': return 'lottie_no_style';
        case 'pb': return 'lottie_pucker_bloat';
        case 'rc': return 'lottie_rectangle';
        case 'rd': return 'lottie_rounded_corners';
        case 'rp': return 'lottie_repeater';
        case 'sh': return 'lottie_path';
        case 'sr': return 'lottie_polystar';
        case 'st': return 'lottie_stroke';
        case 'tm': return 'lottie_trim';
        case 'tr': return 'lottie_transform_shape';
        case 'zz': return 'lottie_zig_zag';
        default: return '';
    }
}
get_type_for_effects(json){
    switch ( json.ty ) {
        case 7: return 'lottie_paint_over_transparent_effect';
        case 20: return 'lottie_tint_effect';
        case 21: return 'lottie_fill_effect';
        case 22: return 'lottie_stroke_effect';
        case 23: return 'lottie_tritone_effect';
        case 24: return 'lottie_pro_levels_effect';
        case 25: return 'lottie_drop_shadow_effect';
        case 26: return 'lottie_radial_wipe_effect';
        case 27: return 'lottie_displacement_map_effect';
        case 28: return 'lottie_matte3_effect';
        case 29: return 'lottie_gaussian_blur_effect';
        case 31: return 'lottie_mesh_warp_effect';
        case 32: return 'lottie_wavy_effect';
        case 33: return 'lottie_spherize_effect';
        case 34: return 'lottie_puppet_effect';
        default: return '';
    }
}
get_type_for_effect_values(json){
    switch ( json.ty ) {
        case 0: return 'lottie_effect_value_slider';
        case 1: return 'lottie_effect_value_angle';
        case 2: return 'lottie_effect_value_color';
        case 3: return 'lottie_effect_value_point';
        case 4: return 'lottie_effect_value_checkbox';
        case 6: return 'lottie_effect_value_ignored';
        case 7: return 'lottie_effect_value_drop_down';
        case 10: return 'lottie_effect_value_layer';
        default: return '';
    }
}
}
