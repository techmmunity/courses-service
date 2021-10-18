import { CourseRepository } from "v1/entities/course";
import { V1CreateCourseInputSchema } from "./schemas/input.schema";

import { validate } from "./validate";

interface Injectables {
	courseRepository: CourseRepository;
}

export const create = async (
	{ courseRepository }: Injectables,
	params: V1CreateCourseInputSchema,
) => {
	const data = await validate(params);

	return courseRepository.save(data);
};
