import service from "..";

export async function signin() {
  return await service.post();
}
