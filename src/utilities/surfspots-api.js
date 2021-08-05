const BASE_URL = '/api/surfspots';

export function getAll() {
	return fetch(BASE_URL).then(res => res.json());
}

export function create(newSurfSpotData) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(newSurfSpotData),
	}).then(res => res.json());
}

export function update(updatedSurfSpotData) {
	return fetch(`${BASE_URL}/${updatedSurfSpotData._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(updatedSurfSpotData),
	}).then(res => res.json());
}

export function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then(res => res.json());
}
