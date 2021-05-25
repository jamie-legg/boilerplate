
export interface IWorld {
	_id: string
	name: String,
	title: String,
	color: String,
	streamCount: Number,
}

const worldSuccessResponse = {
	200: {
		description: 'Successful response',
		type: 'object',
		properties: {
			_id: { type: 'string' },
			name: { type: 'string' },
			title: { type: 'string' },
			color: { type: 'string' },
			streamCount: { type: 'number' },
			__v: { type: 'number' },
		},
	},
}

export const AddWorldSchema = {
	description: 'Create a new world',
	tags: ['worlds'],
	summary: 'Creates new world with given values',
	body: {
		type: 'object',
		properties: {
			title: { type: 'string' },
			name: { type: 'string' },
			color: { type: 'string' },
			streamCount: { type: 'number' },
			services: { type: 'object' },
		},
	},
	response: worldSuccessResponse
};

export const PutWorldSchema = {
	description: 'Updates existing world',
	tags: ['worlds'],
	summary: 'Updates world by Id with given values',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'world Id'
			}
		}
	},
	body: {
		type: 'object',
		properties: {
			title: { type: 'string' },
			brand: { type: 'string' },
			price: { type: 'string' },
			age: { type: 'number' },
			services: { type: 'object' },
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				brand: { type: 'string' },
				price: { type: 'string' },
				age: { type: 'number' },
				services: { type: 'object' },
				__v: { type: 'number' },
			},
		},
	},
};

export const GetWorldSchema = {
	description: 'Gets a single world',
	tags: ['worlds'],
	summary: 'Gets world by Id',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'world Id'
			}
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				brand: { type: 'string' },
				price: { type: 'string' },
				age: { type: 'number' },
				services: { type: 'object' },
				__v: { type: 'number' },
			},
		},
	},
};

export const GetWorldsSchema = {
	description: 'Gets all worlds',
	tags: ['worlds'],
	summary: 'Gets all worlds',
	response: {
		200: {
			description: 'Successful response',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					_id: { type: 'string' },
					title: { type: 'string' },
					brand: { type: 'string' },
					price: { type: 'string' },
					age: { type: 'number' },
					services: { type: 'object' },
					__v: { type: 'number' },
				},
			}
		},
	},
};

export const DeleteWorldSchema = {
	description: 'Deletes a single world',
	tags: ['worlds'],
	summary: 'Deletes world by Id',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'world Id',
			},
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				brand: { type: 'string' },
				price: { type: 'string' },
				age: { type: 'number' },
				services: { type: 'object' },
				__v: { type: 'number' },
			},
		},
	},
};
