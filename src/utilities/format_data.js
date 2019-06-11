const buildUserLink = ({
  userId,
}) => `https://www.flickr.com/people/${userId}`;

const buildPhotoLink = ({
  userId,
  photoId,
}) => `https://www.flickr.com/photos/${userId}/${photoId}`;

const formatData = (data) => {
  return (
    data.photos.photo
      .map(photo => {
        return {
          id: photo.id,
          title: photo.title,
          userName: photo.ownername,
          description: photo.description._content,
          tags: photo.tags,
          userLink: buildUserLink({ 
            userId: photo.owner,
          }),
          imageLink: buildPhotoLink({ 
            userId: photo.owner, 
            photoId: photo.id 
          }),
          imageUrl: photo.url_n,
        };
      })
  );
}

export default formatData;