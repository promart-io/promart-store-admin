/*
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 */

var dao = require('store-admin/data/dao/Products/Products.js')

exports.getTile = function(relativePath) {
	return {
		'name': 'Products',
		'group': 'Products',
		'icon': 'gift',
		'location': relativePath + 'services/v3/web/store-admin/ui/Products/index.html',
		'count': dao.customDataCount(),
		'order': '100'
	};
};
