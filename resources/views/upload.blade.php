<form method="post" action="{{ route('upload.image') }}" enctype="multipart/form-data">
    @csrf
    <input type="file" id="image" name="image" onchange="previewImage()">
    <img id="preview" src="#" alt="Image Preview" style="display:none;">

    <button type="submit">Upload</button>
</form>

<script src="{{ asset('js/main.js') }}"></script>