/* eslint-disable @typescript-eslint/no-explicit-any */

import UpdateProject from "@/components/ui/project/UpdateProject";


const UpdatePro = ({ params }: any) => {
  const { id }: any = params;
  return (
    <div>
      <UpdateProject id={id}></UpdateProject>
    </div>
  );
};

export default UpdatePro;