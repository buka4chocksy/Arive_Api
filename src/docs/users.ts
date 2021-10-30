export const userDocs = {
	get: {
		tags: ['USERS'],
		summary: 'Get all users.',

		responses: {
			'200': {
				description: 'An object with details of the user',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Success'
						},
						example: {
							success: true,
							message: 'users fetched successfully',
							data: {
								data: [
									{
										"_id": "617d2ef8f751e387215c7b15",
										"name": "men",
										"hobbies": [
											{
												"_id": "617ce2ff58a489dab342512c",
												"passion_level": "HIGH",
												"name": "running5",
												"year": 3000,
												"createdAt": "2021-10-30T06:15:27.374Z",
												"updatedAt": "2021-10-30T10:12:44.985Z",
												"__v": 0
											}
										],
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
	},
	post: {
		tags: ['USERS'],
		summary: 'create  user.',
		parameters: [
			// expected params.
			{
			  name: "names", // name of the param
			  in: "path", // location of the param
			  schema: {
				$ref: "#/components/schemas/name", // data model of the param
			  },
			  required: true, // Mandatory param
			  description: "Add user's name", // param desc.
			},
			{
				name: "hobbies", // name of the param
				in: "path", // location of the param
				schema: {
				  $ref: "#/components/schemas/hobbies", // data model of the param
				},
				required: true, // Mandatory param
				description: "Add user hobby", // param desc.
			  },
		  ],

		responses: {
			'200': {
				description: 'An object with details of the user',
				content: {
					'application/json': {
						schema: {
							$ref: '#/components/schemas/Success'
						},
						example: {
							success: true,
							message: 'users created successfully',
							data: {
								data: {
									"name": "meng",
									"hobbies": [
										"617ce2ff58a489dab342512c"
									],
									"_id": "617d33621cedc596e710726d",
									"__v": 0
								}
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
