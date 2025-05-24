


interface BlogDetailsProps {
  params: Promise<{slug: string}>;
}

export default async function BlogDetails({params} : BlogDetailsProps){
  const blogSlug = (await params).slug;
  return (
    <div className="flex justify-center items-center h-96">
      <div>
        Blog slug is - {" "}
        <code>
          {blogSlug}
        </code>
      </div>

      
    </div>
    
  );
}
