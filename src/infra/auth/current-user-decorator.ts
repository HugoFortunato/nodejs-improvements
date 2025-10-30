import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserPayload } from './jwt.strategy';

interface RequestWithUser {
  user: UserPayload;
}

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext): UserPayload => {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    return request.user;
  },
);
