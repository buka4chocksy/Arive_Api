export const hobbyDocs = {
	post: {
		tags: ['Hobby'],
		summary: 'post hobbies.',
        parameters: [
			// expected params.
			{
			  name: "name", // name of the param
			  in: "path", // location of the param
			  schema: {
				$ref: "#/models/schemas/hobby.model.ts", // data model of the param
			  },
			  required: true, // Mandatory param
			  description: " name", // param desc.
			},
			{
				name: "passion_level", // name of the param
				in: "path", // location of the param
				schema: {
				  $ref: "#/components/schemas/passion_level", // data model of the param
				},
				required: true, // Mandatory param
				description: "passion_level", // param desc.
			  },
              {
				name: "year", // name of the param
				in: "path", // location of the param
				schema: {
				  $ref: "#/components/schemas/year", // data model of the param
				},
				required: true, // Mandatory param
				description: "year", // param desc.
			  },
		  ],
		responses: {
			'200': {
				description: 'An object with details of the hobby',
                "parameters": [
                    {
                      "name": "running",
                      "passion_level": "HIGH",
                      "year": 2000,
                    }
                  ],
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Success'
						},
						example: {
							success: true,
							message: 'hobby created successfully',
							data: {
								data:    {
                                    "_id": "617ce2ff58a489dab342512c",
                                    "passion_level": "HIGH",
                                    "name": "running5",
                                    "year": 3000,
                                    "createdAt": "2021-10-30T06:15:27.374Z",
                                    "updatedAt": "2021-10-30T10:12:44.985Z",
                                    "__v": 0
                                },
							}
						}
					}
				}
			},

			'400': {
				description: 'An error object',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Error'
						},
						example: {
							success: false,
							message: []
						}
					}
				}
			}
		}
	},
    get: {
		tags: ['Hobby'],
		summary: 'get all hobbies.',

		responses: {
			'200': {
				description: 'An object with details of all hobbies',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Success'
						},
						example: {
							success: true,
							message: 'hobby fetched successfully',
							data: {
								data: [
									
                                        {
                                            "_id": "617ce2ff58a489dab342512c",
                                            "passion_level": "HIGH",
                                            "name": "paul shaw",
                                            "year": 3000,
                                            "createdAt": "2021-10-30T06:15:27.374Z",
                                            "updatedAt": "2021-10-30T10:12:44.985Z",
                                            "__v": 0
                                        },
                                        {
                                            "_id": "617d31bd67428687763ba221",
                                            "passion_level": "HIGH",
                                            "name": "anna stan",
                                            "year": 3000,
                                            "createdAt": "2021-10-30T11:51:25.982Z",
                                            "updatedAt": "2021-10-30T11:51:25.982Z",
                                            "__v": 0
                                        }
								]
							}
						}
					}
				}
			},

			'400': {
				description: 'An error object',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Error'
						},
						example: {
							success: false,
							message: []
						}
					}
				}
			}
		}
	}

};
